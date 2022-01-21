import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Profile from './pages/Profile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App=()=> {
  return (
    <Router forceRefresh>
    {/* <Router forceRefresh basename="clarusway"> forceRefresh a tagi gibi sayfa yenilemesi sağlar
    basename---url de yeralacak ana kısım için  */}
      <div className="App">
        <Header />
      </div>
      <Switch>{/*switch in amacı yukarıdan aşağı doğru okumayı sağlar */}
        <Route exact path="/" component={Home} />{/*exact --> yalnızca "/" olduğunda bu sayfaya gitme işlemi sağlar  */}
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />{/*Url yanlış yazıldığında yönlendirilecek sayfa path bilirtilmiyor*/}

        {/*<Route path="/" component={Home} />  exact a alternatif yöntem "/" ile ulaşılan sayfayı en sona koymak*/}
      </Switch>
    </Router>
  );
};

export default App;
