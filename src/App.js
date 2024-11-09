import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import RecipeList from './components/RecipeList';
import Header from "./components/Header";

function App() {


  return (
    <div >
      <Header />
<main className="py-5 mt-4 container">
  <RecipeList />
</main>

    </div>
  );
}

export default App;
