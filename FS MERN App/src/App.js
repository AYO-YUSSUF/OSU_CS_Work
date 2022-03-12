import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMoviePage from './pages/AddMoviePage';
import EditMoviePage from './pages/EditMoviePage';

function App() {

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage  />
          </Route>
          <Route path="/add-movie">
            <AddMoviePage />
          </Route>
          <Route path="/edit-movie">
            <EditMoviePage />
          </Route>
          </div>
      </Router>
    </div>
  );
}

export default App;