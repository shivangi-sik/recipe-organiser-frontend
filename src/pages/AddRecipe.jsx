import { useState } from "react"
import Header from "../components/Header"


const AddRecipe = () => {
const [newRecipe, setNewRecipe] = useState({
    recipeName: "",
    cuisineType: "",
    image: "",
    ingredients: [],
    instructions: []
})



const [name, setName]  = useState("")
const [quantity, setQuantity] = useState("")

const inputChangeHandler = (e)=> {
    setNewRecipe((prevRecipe) => ({...prevRecipe, [e.target.id]: e.target.value}))
}

const ingredientsHandler = (e) => {
    e.preventDefault()
    setNewRecipe((prevRecipe) => ({...prevRecipe,  ingredients: [
        ...prevRecipe.ingredients,
        { name: name, quantity: quantity }
      ]}))

      setName("")
      setQuantity("")

}

const instructionsHandler = (e) => {
setNewRecipe((prevRecipe) => ({...prevRecipe, instructions: e.target.value.split(".")}))
}

const formSubmitHandler = async (e) => {
    e.preventDefault()
    try{
        const response = await fetch("https://recipe-organiser-backend-tau.vercel.app/recipes",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newRecipe)
        })


        if(!response.ok){
          throw "Failed to add movie."
        }

        const data = await response.json()

        setNewRecipe({
          recipeName: "",
          cuisineType: "",
          image: "",
          ingredients: [],
          instructions: []
      })
      }
      catch(error){
        console.log(error)
      }
}




  return (
    <div>
      <Header />

      <main className="py-5 mt-4 container">
        <h1>Add Recipe</h1>
<form onSubmit={formSubmitHandler} >
<div>
    <label htmlFor="recipeName">Name:</label><br/>
    <input id="recipeName" type="text" onChange={inputChangeHandler} required value={newRecipe.recipeName}/>
</div><br/>
<div>
    <label htmlFor="cuisineType">Cuisine Type</label><br/>
    <input id="cuisineType" type="text" onChange={inputChangeHandler} required value={newRecipe.cuisineType}/>
</div><br/>
<div>
    <label htmlFor="image">Image Link</label><br/>
    <input id="image" type="url" onChange={inputChangeHandler} value={newRecipe.image}/>
</div><br/>
<div>
    <label>Ingredients:</label><br/>
    <input  id="name" type="text" onChange={(e) => setName(e.target.value)} placeholder="name" value={name} /><br/><br/>
 <input id="quantity" type="text" onChange={(e) => setQuantity(e.target.value)} placeholder="quantity (eg.: 500gm, 2 tbsp, to taste, etc" value={quantity} /><br/>
 <button className="btn btn-primary mt-1" onClick={ingredientsHandler}>Add Ingredient</button>
</div><br/>
<div>
    <label htmlFor="instructions">Instructions:</label><br/>
    <input id="instructions" type="text" onChange={instructionsHandler} required value={newRecipe.instructions}/> <small className="text-secondary">(Put a "." after each instruction)</small>
</div><br/>
 <button className="btn btn-success" type="submit">Sumit</button>
</form>
      </main>
    </div>
  )
}

export default AddRecipe
