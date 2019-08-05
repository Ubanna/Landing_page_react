import React, { useEffect, useState } from "react";
import {Link, BrowserRouter} from 'react-router-dom';
import ShowDiscovery from './ShowDiscovery';

const Discover = () => {
    const APP_ID = "b70b6817";
    const APP_KEY = "0c87b0202319aaca6c3cd9be29a5d008";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('turkey');


useEffect( () => {
   getRecipes();
}, [query]);

const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
}

const updateSearch = e => {
    setSearch(e.target.value);
}

const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
}

return (
    <div>
        <form onSubmit={getSearch}>
            <input type="text" value={search} onChange={updateSearch} style={{background:"grey"}} />
            <button type="submit">SEARCH</button>
        </form>
<div className="discoverContainer">
        {recipes.map((recipe, index) =>(
            <ShowDiscovery title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} key={index} ingredients={recipe.recipe.ingredients}/>          
        ))}
        <Link to="/home">Go to home page</Link>
        </div>
    </div>
)
}

export default Discover;