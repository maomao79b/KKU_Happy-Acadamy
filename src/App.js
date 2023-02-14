import React from 'react';
import Nav from './Component/Nav';
import Login from './Component/Login';
import './App.css';
import { Switch, Route } from 'react-router'
function App() {
  return (
    <div className='App'>
      <Login />
      <Switch>
        <Route>
          
        </Route>

      </Switch>
    </div>
  );
}

export default App;
