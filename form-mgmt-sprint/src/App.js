import React from 'react';
import { Link, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='/'>Login</Link>
        <Link to='/profile'>Profile</Link>
      </header>
      <Route exact path='/' component={Login} />
      <Route path='/profile' component={Profile} />
    </div>
  );
}

export default App;
