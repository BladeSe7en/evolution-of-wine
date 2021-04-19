import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import { createCode } from './DiscountCodeNewActions';

export default function DiscountCodeNew(props) {
    const [name, setName] = useState('');
    const [doesThisExpire, setDoesThisExpire] = useState(true);
    const [duration, setDuration] = useState(0);
    const [isPercentage, setIsPercentage] = useState(0);
    const [discountValue, setDiscountValue] = useState(0);


    const { loading, error } = useSelector((state) => state.Home);
    const { user } = useSelector((state) => state.SignIn);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        let todayDate = moment();
        let expirationDate = doesThisExpire ? todayDate.add(duration, 'days').format('DD-MM-YYYY') : 'none'
        console.log('name: ',name)
        console.log('doesThisExpire: ',doesThisExpire)
        console.log('duration: ',duration)
        console.log('isPercentage: ',isPercentage)
        console.log('discountValue: ',discountValue)
        console.log('expirationDate: ',expirationDate)

            dispatch(createCode(name, doesThisExpire, duration, isPercentage, discountValue, expirationDate, user));
    };

    const handleExpire = (txt) => {
        let durInput = document.getElementById('duration');
        setDoesThisExpire(txt)
        if (txt === true) {
            durInput.disabled = false;
        }
        else {
            durInput.disabled = true;
        }
    }


    return (
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Create New Discount Code</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant='danger'>{error}</MessageBox>}
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Enter name'
                        required
                        onChange={(e) => setName(e.target.value)} >
                    </input>
                </div>
                <label id = 'expireLabel' htmlFor='doesThisExpire'>Does This Expire</label>
                <div className = 'doesThisExpire' name = 'doesThisExpire' id = 'expire'>
                    <label htmlFor='expireTrue'>True</label>
                    <input
                        type='radio'
                        id='expireTrue'
                        name = 'expire'
                        required
                        onChange={() => handleExpire(true)}
                    ></input>
                
                <label htmlFor='false'>False</label>
                        <input
                            type='radio'
                            id='false'
                            name='expire'
                            onChange={() => handleExpire(false)}
                        ></input>
                    </div>

                <div>
                    <label htmlFor='duration'>Duration in Days</label>
                    <input
                        type='text'
                        id='duration'
                        placeholder='Enter duration'
                        required
                        onChange={(e) => setDuration(e.target.value)}
                    ></input>
                </div>
                <label id = 'isPercentageLabel' htmlFor='isPercentage'>Is Percentage</label>
                <div id = 'isPercentage'>
                    <label htmlFor='true'>True</label>
                    <input
                        type='radio'
                        id='true'
                        value = 'true'
                        name = 'isPercentage'
                        required
                        onChange={() => setIsPercentage(true)}
                    ></input>
                
                <label htmlFor='false'>False</label>
                        <input
                            type='radio'
                            id='false'
                            value= 'false'
                            name='isPercentage'
                            onChange={() => setIsPercentage(false)}
                        ></input>
                    </div>
                <div>
                    <label htmlFor='discountValue'>Discount Value</label>
                    <input
                        type='text'
                        id='discountValue'
                        placeholder='Enter Discount Value'
                        onChange={(e) => setDiscountValue(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className='primary' type='submit'>
                        Register
                    </button>
                </div>
                <div>
                </div>
            </form>
    );
}
