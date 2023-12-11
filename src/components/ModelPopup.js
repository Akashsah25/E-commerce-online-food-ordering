import React from 'react';
import { useDispatch } from 'react-redux';
import { clearToCart } from '../redux/slice/CartSlice';

export default function ModelPopup({ OtherRestro }) {
    const dispatch = useDispatch()
    const RefreshCart = () => {
        dispatch(clearToCart())
        OtherRestro(false)
    }
    return (
        <div>
            <div>
                <p>is change restaurants</p>
                <button onClick={() => { OtherRestro(false) }}>
                    No
                </button>
                <button onClick={RefreshCart}>
                    yes,Refreash
                </button>
            </div>
        </div>
    );
}
