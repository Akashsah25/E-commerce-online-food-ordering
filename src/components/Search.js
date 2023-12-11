import React from 'react';

export default function  Search({ setcity, city, searchRestaurants }) {
    return (
        <div>
            <input
                placeholder="Enter city"
                value={city}
                onChange={(e) => setcity(e.target.value)} />
            <button onClick={() => searchRestaurants()}>
                Search
            </button>
        </div>
    );
}
