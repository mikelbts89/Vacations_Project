import React from 'react';
import './App.css';
import Landing_Page from './Client/Landing_Page/Landing_Page'
import CopyRight from './Client/Footer/CopyRight'
import NavBar from './Client/NavBar/NavBar'
import Register from './Client/Register/Register'
import Login from './Client/Login/Login'



function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        {/* <Login /> */}
        {/* <Register /> */}
        <Landing_Page />
      </main>
      <footer>
        <CopyRight />
      </footer>
    </div>
  );
}

export default App;
