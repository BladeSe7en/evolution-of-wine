import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
//import data from '../../data'
import { addToCart } from '../../CartCheckoutComponents/Cart/CartActions';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import NavBarMini from '../../NavBarComponents/NavBarMini/NavBarMini';
import Rating from '../Rating/Rating';
import { getProductDetails } from './ProductDetailsActions';
import SideSearchBar from '../../NavBarComponents/SideSearchBar/SideSearchBar';

export default function ProductDetails(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id
    console.log('productId: ', productId)
    const { loading, productInfo, error } = useSelector((state) => state.ProductDetails);
    const { sideBarOpened } = useSelector((state) => state.SideSearchBar);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        dispatch(getProductDetails(productId))
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        addToCart(productId, qty)
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };


    return (
        <div className='details-container background-image' style={{ backgroundImage: `url('/images/wine-barrel-3.jpeg')` }}>
            <div className='sudo-background-black padding-bottom'>
            <SideSearchBar />
                    <div className={`${sideBarOpened ? 'sudo-background-white-opened' : 'sudo-background-white-closed'}`}>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error || productInfo.lenght === 0 ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div>
                        <NavBarMini />
                        <div className="row top">
                            <div className="coll-2">
                                <ImageCarousel productInfo={productInfo} />

                            </div>
                            <div className="coll-1 padding-left">
                                <ul>
                                    <li>
                                        <h1>{productInfo.name}</h1>
                                    </li>
                                    <li>
                                        <Rating
                                            rating={productInfo.rating}
                                            numReviews={productInfo.numReviews}
                                        ></Rating>
                                    </li>
                                    <li>Price : ${productInfo.price}</li>
                                    <li>
                                        Description:
                    <p>{productInfo.description}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="coll-1">
                                <div className="card card-body">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div>Price</div>
                                                <div className="price">${productInfo.price}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div>Status</div>
                                                <div>
                                                    {productInfo.countInStock > 0 ? (
                                                        <span className="success">In Stock</span>
                                                    ) : (
                                                        <span className="danger">Unavailable</span>
                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                        {productInfo.countInStock > 0 && (
                                            <>
                                                <li>
                                                    <div className="row">
                                                        <div>Qty</div>
                                                        <div>
                                                            <select value={qty} onChange={(e) => setQty(e.target.value)} >
                                                                {[...Array(productInfo.countInStock).keys()].map(
                                                                    (x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button onClick={addToCartHandler} className="primary block" > Add to Cart </button>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            </div>
        </div>
    );
}