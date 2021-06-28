import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Pages/Navbar.js"
import Home from "./components/Pages/Homepage/Home"
import Products from "./components/Pages/Products/Product"
import Services from "./components/Pages/Services/Service"
import SignUp from "./components/Pages/SignUp/SignUp"
import Footer from "./components/Pages/Footer/Footer"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/services' exact component={Services}/>
          <Route path='/sign-up' exact component={SignUp}/>
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
