import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageUploader from '../ImageUploader/ImageUploader';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { getProductDetails } from '../ProductDetails/ProductDetailsActions';
import { imageUploader, productUpdateReset, updateProduct } from './ProductEditActions';


const ProductEdit = (props) => {
    const productId = props.match.params.id;
    const { productInfo } = useSelector((state) => state.ProductDetails);
    const { loading, error, products } = useSelector((state) => state.Home);
    const { updateLoading, updateError, updateSuccess, uploadedImage } = useSelector((state) => state.ProductEdit);
    const [uplodLoading, setUplodLoading] = useState(false);
    const [uploadError, setUploadError] = useState('');
    const { user } = useSelector((state) => state.SignIn);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(uploadedImage);
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [input, setInput] = useState('')


    const dispatch = useDispatch();
    useEffect(() => {
        if (updateSuccess) {
            props.history.push('/productList')
        }

        if (!productInfo || productInfo._id !== productId) {
            dispatch(productUpdateReset())
            dispatch(getProductDetails(productId));
        }  else {
            setName(productInfo.name);
            setPrice(productInfo.price);
            setImage(productInfo.image);
            setCategory(productInfo.category);
            setCountInStock(productInfo.countInStock);
            setBrand(productInfo.brand);
            setDescription(productInfo.description);
        }

    }, [productInfo._id, dispatch, productId]);

useEffect(() => {
    console.log('this is sample edit image in productEdit: ', image)
}, [image, products])

    const submitHandler = (e) => {
        e.preventDefault();
        var updatedProduct = {
            _id: productId,
            name,
            price,
            image: {
                // name: image,
                // lastModified: image.lastModified,
                // lastModifiedDate: image.lastModifiedDate,
                // type: image.type,
                // size: image.size,
                // webkitRelativePath: image.webkitRelativePath
                name: image.name,
                data: image
            },

            category,
            brand,
            countInStock,
            description,
        }
        dispatch(updateProduct(updatedProduct, user));
    };



    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        dispatch(imageUploader( bodyFormData, user))
    }


    return (
        <div>
            <form className="form" encType="multipart/form-data" onSubmit={submitHandler}>
                <div>
                    <h1>Edit Product: {productInfo.name}</h1>
                    <h1>ID: {productId}</h1>
                </div>
                {updateLoading && <LoadingBox></LoadingBox>}
                {updateError && <MessageBox variant="danger">{updateError}</MessageBox>}
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input
                                id="price"
                                type="text"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <ImageUploader/>
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <input
                                id="category"
                                type="text"
                                placeholder="Enter category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            {/* <label htmlFor="imageFile">Image File</label>
                            <input
                                type="file"
                                id="imageFile"
                                label="Choose Image"
                                onChange={uploadFileHandler}
                            ></input> */}
                            {uplodLoading && <LoadingBox></LoadingBox>}
                            {uploadError && (
                                <MessageBox variant="danger">{uploadError}</MessageBox>
                            )}
                        </div>
                        <div>
                            <label htmlFor="brand">Brand</label>
                            <input
                                id="brand"
                                type="text"
                                placeholder="Enter brand"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="countInStock">Count In Stock</label>
                            <input
                                id="countInStock"
                                type="text"
                                placeholder="Enter countInStock"
                                value={countInStock}
                                onChange={(e) => setCountInStock(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                rows="3"
                                type="text"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label></label>
                            <button className="primary" type="submit">
                                Update
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}

export default ProductEdit
