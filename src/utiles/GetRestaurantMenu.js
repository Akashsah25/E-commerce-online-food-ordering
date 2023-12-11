import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function GetRestaurantMenu(id) {
    
    const [menu, setmenu] = useState({
        menu: [],
        restaurantInfo: [],
        menuError: ""
    });
    const { latitude, longitude } = useSelector((store) => store.coordinate)
    console.log("coordinates",longitude,latitude)
    const fetchRestaurantMenu = async () => {
        try {
            const RestaurantMenuAPI = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${id}&submitAction=ENTER`;

            const response = await fetch(RestaurantMenuAPI);
            const data = await response.json()
            const card = data.data?.cards;

            if (card) {
                const element = card.find((item) => 
                    item.groupedCard
                )

                const newmenu = element.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

                const newrestaurantInfo = data.data?.cards[0]?.card?.card?.info;

                setmenu({
                    menu: newmenu,
                    restaurantInfo: newrestaurantInfo
                });
            }
        }
        catch (error) {
            console.error("error fetching menu", error.message);
            setmenu({
                menuError: error.message
            })
        }
    }

    useEffect(() => { fetchRestaurantMenu() }, [latitude, longitude])

    return menu
}
