import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const options = [
        {
            link: "/",
            name: "home"
        },
        {
            link: "/Restaurants",
            name: "Restaurants"
        },
        {
            link: "/contact",
            name: "contact"
        },
        {
            link: "/about",
            name: "about"
        },
    ]
    return (
        <div>
            <ul>
                {options.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={item.link}>
                                {item.name}
                            </NavLink>
                        </li>
                    );
                }
                )}
                <li >
                    <NavLink to="/cart">
                        cart
                    </NavLink>
                </li>
            </ul>
        </div >
    );
}
