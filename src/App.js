import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Card from "./components/Card";

import { data } from "./data/commands";

const findCategories = () => {
  var currCategories = [];
  
  data.forEach(command => {
    if (!currCategories.includes(command.category)) { currCategories.push(command.category) }
  });

  return currCategories;
}

function App() {
  const [commands, setCommands] = useState(data);
  const [categories, setCategories] = useState(findCategories);


  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} categories={categories} />} />
          <Route exact path="/card/:id" render={props => <Card {...props} commands={commands} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
