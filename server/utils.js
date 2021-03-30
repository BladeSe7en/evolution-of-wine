import jwt from 'jsonwebtoken';


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

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    console.log('this is authorization: ',authorization)
    if (authorization) {
        const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
        console.log('token: ',token)
        jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, decode) => {
                console.log('this is decode before if: ',decode)
                console.log('this is err before if: ',err)
                if (err) {
                    res.status(401).send({ message: 'Invalid Token' });
                    console.log('INSIDE THE IF')
                } else {
                    console.log('INSIDE THE ELSE')
                    console.log('this is decode: ',decode)
                    req.body.token = decode;
                    next();
                }
            }
        );
    } else {
        res.status(401).send({ message: 'No Token' });
    }
};