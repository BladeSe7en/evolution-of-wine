import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import { addNewSalesData } from './StatsContainerActions';

export default function StatsContainer(props) {
    const { loading, error, products } = useSelector((state) => state.Home);
    const { user } = useSelector((state) => state.SignIn);
    const { updatedSalesData } = useSelector((state) => state.StatsContainer);


    const dispatch = useDispatch();

    // useEffect(() => {
    //     let month = 'April 2021'
    //     let productName = 'Nike Slim Shirt'
    //     let totalPriceAtSale = 360
    //     let qtySold = 3
    //     dispatch(addNewSalesData(month, productName, totalPriceAtSale, qtySold, user))
    // }, []);
    // useEffect(() => {
    //     console.log(JSON.stringify(updatedSalesData.final._id, null, 2))
    // }, [updatedSalesData])

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="stats-container">
                    <h1>{JSON.stringify(updatedSalesData, null, '\n')}</h1>
                </div>
            )}
        </div>
    );
}

