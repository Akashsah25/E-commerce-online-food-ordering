import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RestaurantsCard({ restaurant }) {
    const filteredData = restaurant;
    console.log("RestaurantList",filteredData)
    const Navigate = useNavigate();
    const openRestaurantMenu = (id) => {
        Navigate(`/menu/${id}`)
    }
    return (
        <div>
            {
                filteredData.map(({ info }) => {
                    const {
                        name,
                        id,
                        avgRating,
                        cuisines,
                        costForTwo,
                        sla,
                        aggregatedDiscountInfoV3,
                        cloudinaryImageId,
                        availability,
                    } = info;
                    return (
                        <div key={id} onClick={() => openRestaurantMenu(id)}>
                            <h1>{name}</h1>
                            <h2>{avgRating}</h2>
                        </div>
                    );

                })
            }
        </div>
    );
}