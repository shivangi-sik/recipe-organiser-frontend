import { Link } from 'react-router-dom';
import useFetch from '../useFetch';
import { useEffect, useState } from 'react';
const RecipeList = () => {


    const {data, error, loading} = useFetch("https://recipe-organiser-backend-tau.vercel.app/recipes")
const [recipesData, setRecipesData] = useState([])
const [filteredData, setFilteredData] = useState(recipesData)

useEffect(() => {
  if(data){
setRecipesData(data)
  }
}, [data])

useEffect(() => {
    if(recipesData){
        setFilteredData(recipesData)
    }

}, [recipesData])

const searchHandler = (e) => {
if(e.target.value){
    setFilteredData(recipesData.filter((recipe) => recipe.recipeName.toLowerCase().includes(e.target.value.toLowerCase())))
}
else{
    setFilteredData(recipesData)
}
}

const deleteRecipeHandler = async (e) => {
const recipeId = e.target.id

try{
    const response = await fetch(`https://recipe-organiser-backend-tau.vercel.app/recipes/${recipeId}`, {
        method: "DELETE"
    })
    if (!response.ok) {
        throw new Error("Failed to delete the recipe");
      }

      console.log("Recipe deleted successfully");

      setRecipesData(prevRecipes => prevRecipes.filter(recipe => recipe._id !== recipeId));


  }
   catch (error) {
    console.error("Error deleting recipe:", error);
  }
}

  return (
    <div className='py-4'>
 <form className=" w-75 my-3" role="search ">
      <input className="form-control me-2" type="search" placeholder="Search by recipe name..." aria-label="Search" onChange={searchHandler}/>

    </form>
<h1>All Recipes: </h1>
{loading && <p className='text-center'>Loading...</p>}
{error && <p>{error}</p>}
<div className='row'>
{filteredData?.map(recipe => <div key={recipe._id} className='col-md-3 col-sm-6 my-2 view-recipe'>

    <div className='card'>
    <Link to={`/recipes/${recipe._id}`} className='text-decoration-none'>
            <img src={recipe.image} className='card-img-top'/>
            <div className="middle">
    <div className="text">View Recipe</div>
  </div>
  </Link>
    <div className='card-body text-center'>
<h4>{recipe.recipeName}</h4>
<p><strong>Cuisine Type: </strong>{recipe.cuisineType}</p>
<button id={recipe._id} className='btn btn-danger' onClick={deleteRecipeHandler}>Delete</button>
    </div>
</div>


</div>)}
</div>

    </div>
  )
}

export default RecipeList
