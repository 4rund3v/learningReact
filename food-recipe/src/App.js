import React from 'react';
import logo from './logo.svg';
import Recipe from './recipe'
import './App.css';
import {useEffect, useState} from 'react';
 

const App = () => {
  const APP_ID = 'dff1354b';
  const APP_KEY = '3ab461f7378a3578a491fbb32f738d6a';
  

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('milk');


  const recipeURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect( () => {
      getRecipes();
    }, [query]
  );

  const getRecipes = async () => {
    const response = await fetch(recipeURL);
    const data = await response.json();
    console.log("getRecipes Result : ", data);
    setRecipes(data.hits);
  }

  const updateSearch = ev => {
    setSearch(ev.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text"  value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit"          >
            Search
        </button>
      </form>
      {/* <h1  onClick={() => setCounter(counter+1) }> Stuff {counter} </h1> */}
      <div className="recipes">
        { recipes.map(recipe => (
          <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
