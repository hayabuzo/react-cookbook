import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";
import { GoBack } from "../components/GoBack";

export function Category() {
  const {name} = useParams();
  const [meals, setMeals] = useState([]);

  useEffect( () => {
    getFilteredCategory(name)
    .then(data => setMeals(data.meals))
  }, [name]);

  return <>
    <GoBack />
    {!meals.length ? <Preloader /> : <MealList meals={meals} />}
  </>

}