import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/App.scss";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cocktail/:id">
            <SingleCocktail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
