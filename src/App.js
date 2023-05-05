
import logo from './logo.svg';
import './App.css';
import react from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './screens/Navbar'

import Movie from './screens/Movie';
import BookingPage from './screens/BookingPage'

function App() {


  return (
    <div className="App">
 <Router>
     <Routes>
       
        <Route path="/" element={<><Navbar/><Home/></>} >
         
        </Route>
        <Route path="/description" element={<><Movie/></>}  ></Route>
        <Route path="/booking" element={<><BookingPage/></>}></Route>

        </Routes>
       
        </Router>
    </div>
  );
}

export default App;
