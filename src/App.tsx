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
import Products from './Pages/Products';



function App() {
  return (
    <>

      <Router>
        <div className="App">
          <div>
            <Navbar />

            <div className="content">
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<Products />} />
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
