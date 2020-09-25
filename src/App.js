import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Axios from "axios";


import { store } from "./store";
import Home from "./components/screens/Home";
import Category from "./components/screens/Category";
import Single from "./components/screens/Single";
import NotFound from "./components/screens/NotFound";
import PizzaApp from "./components/screens/pizzaForm";
import Shop from "./components/screens/shop";
import Posts1 from "./components/parts/Posts1";
import Posts2 from "./components/parts/Posts2";
import Posts3 from "./components/parts/Posts3";


function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/FAQ">
            <Category />
          </Route>
          <Route path="/single">
            <Single />
          </Route>
          <Route path="/pizzaForm">
            <PizzaApp />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/Posts1">
            <Posts1 />
          </Route>
          <Route path="/Posts2">
            <Posts2 />
          </Route>
          <Route path="/Posts3">
            <Posts3 />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
