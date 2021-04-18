import jwt from 'jsonwebtoken';
import multer from 'multer';

export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d',
        }
    );
};



// console.log('this is authorization: ', authorization)
   //  console.log('this is reg in isAuth: ',req)

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    console.log('req.headers: ',req.headers)
        console.log('req.file: ',req.file)

    if (authorization) {
        const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
        //console.log('token: ', token)
        jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, decode) => {
               // console.log('this is decode before if: ', decode)
               // console.log('this is err before if: ', err)
                if (err) {
                    res.status(401).send({ message: 'Invalid Token' });
                    console.log('Error in isAuth')
                } else {
                    console.log('Passed isAuth')
                   // console.log('this is decode: ', decode)
                    req.body.token = decode;
                    next();
                }
            }
        );
    } else {
        res.status(401).send({ message: 'No Token' });
    }
};

export const isAdmin = (req, res, next) => {
    console.log('000000 req.body: ',req.body)
    if (req.body.token && req.body.token.isAdmin) {
        console.log('passed isAdmin')
        next();
    } else {
        res.status(401).send({ message: 'Invalid Admin Token' });
    }
};



const storage = multer.diskStorage({
    
    destination(req, file, cb) {
        console.log('do I make it here')
        cb(null, 'uploads');
    },
    filename(req, file, cb) {
        console.log('or do I make it here')

        cb(null, `${Date.now()}.jpg`);
    },
});

const upload = multer({ storage });
export default  upload