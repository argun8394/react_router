import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Profile from './pages/Profile';
import Home from './pages/Home';

const App=()=> {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>{/*switch in amacı yukarıdan aşağı doğru okumayı sağlar */}
        <Route exact path="/" component={Home} />{/*exact --> yalnızca "/" olduğunda bu sayfaya gitme işlemi sağlar  */}
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
