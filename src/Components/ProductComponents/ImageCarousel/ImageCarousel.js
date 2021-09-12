import React from 'react';
import {  useSelector } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';



const ImageCarousel = (props) => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const { loading, error } = useSelector((state) => state.Home);
    const { productInfo } = useSelector((state) => state.ProductDetails);
    
    return (
        <div className='ImageCarousel-container' >
            {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant='danger' >{error} </MessageBox>) : (
            console.log('productInfo: ',productInfo),
            <Carousel>
                {productInfo._id && productInfo.image.map((item, i) => (
                    <div key = {productInfo._id+i}>
                        <img src={item} alt={productInfo.name} />
                        <p className="legend">This is a test {i}</p>
                    </div>
                ))}
            </Carousel>
            )}
        </div>
    );
}

export default ImageCarousel;



