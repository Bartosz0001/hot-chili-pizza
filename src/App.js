import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/notFound' component={NotFound} />
    </Switch>
  );
}

export default App;
