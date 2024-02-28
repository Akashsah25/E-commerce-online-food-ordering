import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function GetRestaurants() {
    const [restaurantData, setrestaurantData] = useState({
        restaurants: [],
        restaurantError: "",
    });

    const { searchedCity ,longitude, latitude } = useSelector((store) => store.coordinate);

    console.log(`coordinats of ${searchedCity}:lat=${latitude},lon=${longitude}`)

    const fetchRestaurantsdata = async () => {
        try {
            let RestaurantsAPI = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`;
            
            // let RestaurantsAPI =`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true`;
            
            const response = await fetch(RestaurantsAPI);
            const data = await response.json();
            const card = data.data?.cards;

            if (card){
                const element = card.filter((item) =>
                    item.card?.card?.gridElements?.infoWithStyle?.restaurants);

                const newrestaurant =
                    element[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants

                // console.log("restaurant", newrestaurant);

                setrestaurantData({
                    restaurants: newrestaurant
                })
            }
        } catch (error) {
            console.error("error fething data", error.message);
            setrestaurantData({
                restaurantError: error.message
            })
        }
    }

    useEffect(() => { fetchRestaurantsdata() }, [longitude, latitude])

    return restaurantData

}
