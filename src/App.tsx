import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import './App.css';
import Navbar from './Components/Navbar';
import Signin from './Pages/Auth/Signin';
import Signup from './Pages/Auth/Signup';

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

            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
              </Routes>
            </div>

          </div>
        </div>
      </Router>

    </>

  );


}

export default App;
