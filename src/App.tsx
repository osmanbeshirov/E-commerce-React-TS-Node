import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

// import './App.css';
import Navbar from './Components/Navbar';

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

function App() {
  return (
    <>

      <Router>
        <div className="App">
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />

            </Routes>
          </div>
        </div>
      </Router>
    </>

  );


}

export default App;
