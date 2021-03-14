import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from "./Home";
import Checkout from './Checkout';
import Footer from './Footer';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            {/* <h1>Checkout</h1> */}
          </Route>
          <Route path="/login">
            {/* <Login /> */}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router >
      </div>
      <Footer/>
    </div>

  );
}

export default App;
