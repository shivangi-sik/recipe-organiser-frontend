import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />
},
{
  path: "/recipes/:recipeId",
  element: <RecipeDetails />
},
{
  path: "/recipes/add-recipe",
  element: <AddRecipe />
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
