import React from 'react';
import Gallery from './Gallery/Gallery.js';
import './App.css';
import NavBar from './NavBar/NavBar.js';
import Hero from './Hero/Hero.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Details from './Details.js';
import Review from './Review';
import NotFound from './NotFound.js'; 


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Hero} />
        <Route exact path="/" component={Gallery} />
        <Switch>
        <Route exact path='/not-found' component={NotFound}/>
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/:movie" component={Details} />
        <Route exact path='/review/:Review' component={Review} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;