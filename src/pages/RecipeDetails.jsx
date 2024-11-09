import { useParams } from "react-router-dom"
import Header from "../components/Header"
import useFetch from "../useFetch"
import { useEffect, useState } from "react"

const RecipeDetails = () => {
const {recipeId} = useParams()
const {data, loading} = useFetch(`https://recipe-organiser-backend-tau.vercel.app/recipes/${recipeId}`)

const [recipe, setRecipe] = useState({})

useEffect(() => {
if(data){
    setRecipe(data)
}
}, [data])

console.log(recipe)

  return (
    <div>
<Header />
<main className="py-5 mt-5 container">
    {loading && <p className="text-center">Loading...</p>}
    <h1>{recipe.recipeName}</h1>
    {recipe.recipeName && (
        <div class="card">
  <div class="row ">
    <div class="col-md-5">
      <img src={recipe.image} class="img-fluid " alt="..." />
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h3 >Cuisine: {recipe.cuisineType}</h3>
        <h5>Ingredients:</h5>
        <p >{recipe.ingredients.map(ingredient => <sapn>{ingredient.quantity} {ingredient.name}, </sapn>)}</p>
        <h5>Instructions:</h5>
        <ol>{recipe.instructions.map(instruction => <li>{instruction}</li>)}</ol>
        <p></p>

      </div>
    </div>
  </div>
</div>)
}
</main>
    </div>
  )
}

export default RecipeDetails
