import React from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';

export default function Cart() {
  const {cartItems}=useSelector(store=>store.cart)
  return (
    <div>
      <h1>cart</h1>
      <h1>{cartItems.length}</h1>
    </div>
  );
}
