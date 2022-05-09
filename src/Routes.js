import Cards from './Cards';
import { useEffect } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Aboutus from './Aboutus';
import Resources from './resources';

const MyRoutes = () => {
    

  return (
      

    <Router basename='polar_frontend'>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/aboutUs" element={<Aboutus />} />
        <Route path="/howitworks" element={<Resources />} />
          
    </Routes>
    </Router>
    
  );
}


export default MyRoutes;