import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import { updateCode, getCode, codeUpdateReset } from './DiscountCodeEditActions'

export default function DiscountCodeEdit(props) {
    const { codeEditLoading, codeEditError, codeEditSuccess, selecteCode } = useSelector((state) => state.DiscountCodeEdit);
    const { loading, error } = useSelector((state) => state.Home);
    const { user } = useSelector((state) => state.SignIn);

    const codeId = props.match.params.id;

    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [discountValue, setDiscountValue] = useState('');
    const [isPercentage, setIsPercentage] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (codeEditSuccess) {
            dispatch(codeUpdateReset());
            props.history.push('/discountCodes');
        }
        if (selecteCode.name === '') {
            dispatch(getCode(codeId, user))
        } else {
            setName(selecteCode.name)
            setDuration(selecteCode.duration)
            setDiscountValue(selecteCode.discountValue)
            setIsPercentage(selecteCode.isPersetIsPercentage)
        }

    }, [dispatch, props.history, codeEditSuccess, codeId, user, selecteCode]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateCode( codeId, user, name, duration, discountValue, isPercentage ));
    };
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
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} >
                            </input>
                        </div>
                        <div>
                            <label htmlFor="duration">Duration</label>
                            <input
                                id="duration"
                                type="duration"
                                placeholder="Enter duration"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)} >
                            </input>
                        </div>
                        <div>
                            <label htmlFor="discountValue">Discount Value</label>
                            <input
                                id="discountValue"
                                type="discountValue"
                                placeholder="Enter Discount Value"
                                value={discountValue}
                                onChange={(e) => setDiscountValue(e.target.value)} >
                            </input>
                        </div>
                        <div>
                            <label htmlFor="isPercentage">Is Percentage</label>
                            <input
                                id="isPercentage"
                                type="checkbox"
                                checked={isPercentage}
                                onChange={(e) => setIsPercentage(e.target.checked)} >
                            </input>
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
