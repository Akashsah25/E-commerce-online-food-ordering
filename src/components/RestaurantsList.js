import React, { useEffect, useState } from 'react';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { coordinateFetch, setLatitude, setLongitude } from '../redux/slice/CoordinateSlice';
import GetRestaurants from '../utiles/GetRestaurants';
import RestaurantsCard from './RestaurantsCard';
import RestaurantsShimmer from './RestaurantsShimmer';

export default function RestaurantsList() {

  const [city, setcity] = useState("");

  const dispatch = useDispatch()

  const { longitude, latitude } = useSelector((store) => store.coordinate)

  const restaurantData = GetRestaurants();
  const { restaurants } = restaurantData;


  function searchRestaurants() {
    dispatch(coordinateFetch(city));
    setcity("")
  }
  // fetching current location (longitude,latitude) for fetching restaurents as per the location
  const currentlocation = () => {
    if (longitude == null && latitude == null) {

      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(setLatitude(position.coords.latitude))
        dispatch(setLongitude(position.coords.longitude))
      },
        (error) => {
          console.error(error.message)
        }
      )
    }
  }
  useEffect(() => {
    currentlocation()
  }, []);

  return (
    <div>
      <Search searchRestaurants={searchRestaurants}
        city={city}
        setcity={setcity} />
      {restaurants && restaurants.length > 0 ? (
        <RestaurantsCard restaurant={restaurants} />
      ) : (
        <RestaurantsShimmer />
      )}
    </div>
  );
}
