import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DiscountCodeNew from '../../DiscountCodeNew/DiscountCodeNew';
import LoadingBox from '../../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../../UtilityComponents/MessageBox/MessageBox';
import { getAllDiscountCodes, deleteCode } from './DiscountCodesActions';

export default function DiscountCodes(props) {
    const { allCodesLoading, allCodesError, allCodes, allCodesSuccess } = useSelector((state) => state.DiscountCodes);
    const { user } = useSelector((state) => state.SignIn);
    const { loading, error } = useSelector((state) => state.Home);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDiscountCodes(user));
    }, [dispatch, allCodesSuccess]);

    const deleteHandler = (code) => {
        if (window.confirm(`Are you sure you want to delete ${code.name}?`)) {
            dispatch(deleteCode(code, user));
        }
    };
    const isCodeActive = (code) => {
        let todayDate = moment();
        let futureDate = moment(code.expireDate, 'DD-MM-YYYY');
        if (!todayDate.isAfter(futureDate)) {
            console.log('Date is future');
            return true
        } else {
            console.log('Date is not future');
            return false
        }
    }

    let activeCodes = allCodes.filter((code) => isCodeActive(code.expireDate) === true)
    let oldCodes = allCodes.filter((code) => isCodeActive(code.expireDate) === false)

    return (
        <div >
            <DiscountCodeNew />
            {allCodesLoading && <LoadingBox></LoadingBox>}
            {allCodesError && <MessageBox variant="danger">{allCodesError}</MessageBox>}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <>
                    <div className='tables-display'>
                        <h1 className='center-text'> All Active Codes </h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>DURATION</th>
                                    <th>EXPIRE DATE</th>
                                    <th>VALUE</th>
                                    <th>IS PERCENTAGE</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeCodes.map((code) => (
                                    <tr key={code._id}>
                                        <td>{code._id}</td>
                                        <td>{code.name}</td>
                                        <td>{code.expireDate}</td>
                                        <td>{code.value}</td>
                                        <td>{code.isPercentage ? 'YES' : 'NO'}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="small"
                                                onClick={() => props.history.push(`/discountCode/${code._id}/edit`)}>
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="small"
                                                onClick={() => deleteHandler(code._id)} >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='tables-display'>
                        <h1 className='center-text'> All Old Codes </h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>DURATION</th>
                                    <th>EXPIRE DATE</th>
                                    <th>VALUE</th>
                                    <th>IS PERCENTAGE</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {oldCodes.map((code) => (
                                    <tr key={code._id}>
                                        <td>{code._id}</td>
                                        <td>{code.name}</td>
                                        <td>{code.expireDate}</td>
                                        <td>{code.value}</td>
                                        <td>{code.isPercentage ? 'YES' : 'NO'}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="small"
                                                onClick={() => props.history.push(`/discountCode/${code._id}/edit`)}>
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="small"
                                                onClick={() => deleteHandler(code._id)} >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}
