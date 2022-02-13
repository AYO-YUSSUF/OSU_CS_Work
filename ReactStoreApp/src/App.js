import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pulls in the store list and items for sale list
import stores from './data/stores';
import items from './data/items';

// Imports pages for the app
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import StoresPage from './pages/StoresPage';

// Imports the components being used
import Navigation from './components/Navigation'

function App() {  

  return (
    <div className="App">
      <Router>

        <header className="App-header" d73f09>
          <h1>Jenna's Sex Toys and Snacks</h1>
          <p>
            Where we sell everything you need to fill you up!
          </p>
          <h6>(Sex toys currently out of stock.</h6>
          <h6>Netflix And Chill hit us really hard.</h6>
          <h6>We apologize for any inconvenience this has caused.)</h6>     
        </header>

        <Navigation />

        <main>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/order"><OrderPage items={items} /></Route>
          <Route path="/stores"><StoresPage stores={stores} /></Route>
        </main>

        <footer class="page-footer">
          <p>© 2021 Jenna Rowan</p>
        </footer>

      </Router>
    </div>
  );
}

export default App;
