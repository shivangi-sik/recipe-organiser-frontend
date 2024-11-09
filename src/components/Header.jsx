import { Link, NavLink } from "react-router-dom"


const Header = () => {
  return (
    <div className="bg-body-tertiary py-2 fixed-top">
        <nav className="container navbar navbar-expand d-flex justify-content-between">
        <NavLink to="/" className="navbar-brand ">Recipe Organiser </NavLink >

<div className="">
<ul className="navbar-nav ">
            <li className="nav-item"><Link to="/" className="nav-link">Recipes</Link></li>
            <li className="nav-item"><Link to="/recipes/add-recipe"  className="nav-link">Add Recipe</Link></li>
        </ul>
</div>

        </nav>

    </div>
  )
}

export default Header
