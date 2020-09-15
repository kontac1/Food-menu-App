//import useEffect and UseState to make request to the API
import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";

import './App.css';

const App = () => {
    //edman recipies api information
    const APP_ID = "251e479a";
    const APP_KEY = "b8093651e4b425280181a5b95924fa4b";

    const [recipes, setRecipes] = useState([]);

    const [search, setSearch] = useState('');

    const [query, setQuery] = useState('chicken');

    //make a request to the api
    useEffect(() => {
        getRecipes();

    }, [query]);

    //make a request and await the response before fetching it
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();

        setRecipes(data.hits);
        console.log(data.hits);

    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
    }

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className= "container">
                {recipes.map(recipes => (
                    <Recipe
                        key={recipes.recipe.label}
                        title={recipes.recipe.label}
                        calories={recipes.recipe.calories}
                        image={recipes.recipe.image}
                        ingredients={recipes.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    )
}

export default App;
