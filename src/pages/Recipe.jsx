import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import { GoBack } from "../components/GoBack";
import { Preloader } from "../components/Preloader";

export function Recipe () {
  const [recipe, setRecipe] = useState({});
  const {id} = useParams();
  getMealById(id)
  .then(data => setRecipe(data.meals[0]));
  return <>
    {!recipe.idMeal ? <Preloader /> : (
      <div className="recipe">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h1>{recipe.strMeal}</h1>
        <h6>{recipe.strCategory + (recipe.strArea ? " ("+recipe.strArea+")" : null)}</h6>
        <p>{recipe.strInstructions}</p>

        <table className="centered">
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            { 
              Object.keys(recipe).map(key => {
                if(key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key} >
                      <td>{recipe[key]}</td>
                      <td>{
                        recipe[`strMeasure${key.slice(13)}`]
                      }</td>
                    </tr>
                  )
                }
                return null;
              }) 
            }
          </tbody>
        </table>

        {recipe.strYoutube ? <div className="row">
          <h5 style={{margin: '2rem 0 1.5rem'}}>Video instructions:</h5>
          <iframe title={id} src={`https://www.youtube.com/embed/`+recipe.strYoutube.slice(-11)}/> 
          </div>
          : null}
      </div>
    )}
    <GoBack />
  </>
}