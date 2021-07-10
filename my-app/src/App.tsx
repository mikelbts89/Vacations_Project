import React from 'react';
import './App.css';
import Landing_Page from './Client/Landing_Page/Landing_Page'
import CopyRight from './Client/Footer/CopyRight'
import NavBar from './Client/NavBar/NavBar'
import Register from './Client/Register/Register'
import Login from './Client/Login/Login'
import { BrowserRouter } from "react-router-dom";
import Routing from '../src/Client/Routing/Routing'
import NavBarRouting from '../src/Client/Routing/NavBarRouting'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBarRouting />
        </header>
        <main>
          <Routing />
        </main>
        <footer>
          <CopyRight />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
