import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.scss';
import Home from './routes/index';
import Error from './components/dynamic/error/Error';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
