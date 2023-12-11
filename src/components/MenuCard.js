import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRestroInfo, addToCart } from '../redux/slice/CartSlice';
import ModelPopup from './ModelPopup';

export default function MenuCard({ menu, currentrestroinfo }) {

  console.log("MenuList", menu)
  const dispatch = useDispatch()
  const { restroInfo } = useSelector(store => store.cart)
  const [OtherRestro, setOtherRestro] = useState(false);
  
  return (
    <div>
      {OtherRestro &&
      <ModelPopup OtherRestro={setOtherRestro}/>
      }
      {
        menu.map(({ card }) => {
          const {
            id,
            isveg,
            name,
            price,
            description
          } = card.info;
          return (
            <div key={id}>
              <div>
                {name}
              </div>
              <div>
                {price}
              </div>
              <div>
                {description}
              </div>
              <div>
                <button
                  onClick={() => {
                    if (restroInfo.length === 0) {
                      dispatch(addToCart(card.info));
                      dispatch(addRestroInfo(currentrestroinfo))
                    }
                    else if (restroInfo.name === currentrestroinfo.name && restroInfo.locality === currentrestroinfo.locality) {
                      dispatch(addToCart(card.info));
                      dispatch(addRestroInfo(currentrestroinfo))
                    }
                    else {
                      setOtherRestro(true)
                    }
                  }
                  }>
                  addToCart
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
