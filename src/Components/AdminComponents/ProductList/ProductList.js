import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../Home/HomeActions';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import { createProduct, productCreateReset, productDelete, productDeleteReset } from './ProductListActions';

export default function ProductListScreen(props) {
    const { createLoading, createSeccess, createError, createdProduct, deleteSuccess, deleteLoading, deleteError } = useSelector((state) => state.ProductList);
    const { loading, error, products } = useSelector((state) => state.Home);
    const { user } = useSelector((state) => state.SignIn);




    const dispatch = useDispatch();
    useEffect(() => {
        if (createSeccess) {
            console.log('success!')
            dispatch(productCreateReset())
            props.history.push(`/product/${createdProduct._id}/edit`);
        }

        if (deleteSuccess) {
            dispatch(productDeleteReset());

        }
        dispatch(listProducts());
    }, [dispatch, createdProduct, deleteSuccess, props.history, createSeccess]);


    const deleteHandler = (product) => {
        console.log('this should be the deleted product: ',product)
        if (window.confirm(`Are you sure want to delete ${product.name}?`)) {
            dispatch(productDelete(user, product._id));
        }
    }

    const createHandler = () => {
        dispatch(createProduct(user))
    }
    return (
        <div>
            <div className="row">
                <h1>Products</h1>
                <button type="button" className="primary" onClick={createHandler}>
                    Create Product
                </button>
            </div>
            {deleteLoading && <LoadingBox></LoadingBox>}
            {deleteError && <MessageBox variant="danger">{deleteError}</MessageBox>}

            {createLoading && <LoadingBox></LoadingBox>}
            {createError && <MessageBox variant="danger">{createError}</MessageBox>}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>IMAGES</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>BRAND</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.image.length}</td>
                                <td>{product.price.toFixed(2)}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() =>
                                            props.history.push(`/product/${product._id}/edit`)
                                        }>
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => deleteHandler(product)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
