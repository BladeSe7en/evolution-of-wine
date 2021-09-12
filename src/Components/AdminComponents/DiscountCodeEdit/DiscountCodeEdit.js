import moment from 'moment';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import { updateCode, getCode, codeUpdateReset } from './DiscountCodeEditActions'

const DiscountCodeEdit = (props) => {
    const { codeEditLoading, codeEditError, codeEditSuccess, selectedCode } = useSelector((state) => state.DiscountCodeEdit);
    const { loading, error } = useSelector((state) => state.Home);
    const { user } = useSelector((state) => state.SignIn);

    const codeId = props.match.params.id;

    const [name, setName] = useState('');
    const [doesThisExpire, setDoesThisExpire] = useState(true);
    const [duration, setDuration] = useState('');
    const [discountValue, setDiscountValue] = useState('');
    const [isPercentage, setIsPercentage] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (codeEditSuccess) {
            dispatch(codeUpdateReset());
            props.history.push('/discountCodes');
        }
        if (selectedCode === '') {
            console.log('this is codeID: ', codeId)
            dispatch(getCode(codeId, user))
        } else {
            console.log('this is selectedCode: ',selectedCode)
            setName(selectedCode.name)
            setDuration(selectedCode.duration)
            setDiscountValue(selectedCode.discount)
            setIsPercentage(selectedCode.isPersetIsPercentage)
        }

    }, [dispatch, props.history, codeEditSuccess, codeId, user, selectedCode]);

    const submitHandler = (e) => {
        e.preventDefault();
        let todayDate = moment();
        let expirationDate = doesThisExpire ? todayDate.add(duration, 'days').format('DD-MM-YYYY') : 'none'
        dispatch(updateCode(codeId, name, doesThisExpire, duration, isPercentage, discountValue, expirationDate, user));
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
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Edit Discount Code {name}</h1>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && (
                        <MessageBox variant="danger">{error}</MessageBox>
                    )}
                </div>
                {codeEditLoading ? (
                    <LoadingBox />
                ) : codeEditError ? (
                    <MessageBox variant="danger">{codeEditError}</MessageBox>
                ) : (
                    <>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                id='name'
                                placeholder='Enter name'
                                value = {name}
                                required
                                onChange={(e) => setName(e.target.value)} >
                            </input>
                        </div>
                        <label id='expireLabel' htmlFor='doesThisExpire'>Does This Expire</label>
                        <div id='doesThisExpire' name='doesThisExpire' >
                            <label htmlFor='expireTrue'>True</label>
                            <input
                                type='radio'
                                id='expireTrue'
                                name='expire'
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
                                value = {duration === 0 ? 'infinity' : duration}
                                required
                                onChange={(e) => setDuration(e.target.value)}
                            ></input>
                        </div>
                        <label id='isPercentageLabel' htmlFor='isPercentage'>Is This A Percentage</label>
                        <div id='isPercentage'>
                            <label htmlFor='true'>True</label>
                            <input
                                type='radio'
                                id='true'
                                value='true'
                                name='isPercentage'
                                required
                                onChange={() => setIsPercentage(true)}
                            ></input>

                            <label htmlFor='false'>False</label>
                            <input
                                type='radio'
                                id='false'
                                value='false'
                                name='isPercentage'
                                onChange={() => setIsPercentage(false)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor='discountValue'>Discount Value</label>
                            <input
                                type='text'
                                id='discountValue'
                                value = {discountValue}
                                placeholder='Enter Discount Value'
                                onChange={(e) => setDiscountValue(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <button type="submit" className="primary">
                                Update
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}
export default DiscountCodeEdit;