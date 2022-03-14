import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation'

import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  return (

    <div className="App">

      <Router>

        <header className="App-header">
          <h1>Jenna's Beefcake Fitness Tracker Web App</h1>
          <p>This page allows you to enter exercises you do on your way to being swole AF</p>
        </header>

        <Navigation />

        <main>

        <div className="App-body">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
        </div>

        </main>

        <footer className="App-footer">
          <p>© 2021 Jenna Rowan</p>
        </footer>

      </Router>

    </div>

  );
}

export default App;