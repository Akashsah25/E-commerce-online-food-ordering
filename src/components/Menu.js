import React from 'react';
import GetRestaurantMenu from '../utiles/GetRestaurantMenu';
import { useParams } from 'react-router-dom';
import MenuCard from './MenuCard';
import MenuShimmer from './MenuShimmer';

export default function Menu() {
  const { id } = useParams();

  const { menu, restaurantInfo, menuError } = GetRestaurantMenu(id)
  const {
    totalRatingsString,
    avgRating,
    city,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    isOpen,
    locality,
    name,
    sla,
  } = restaurantInfo
  return (
    <div>
{
      <div>
        <h1>{name}</h1>
        <h2>{city}</h2>
      </div>
}
      {menu && menu.length > 0 ? (
        <MenuCard menu={menu} currentrestroinfo={restaurantInfo} />
      ) : (
        <MenuShimmer />
      )}
    </div>
  );
}
