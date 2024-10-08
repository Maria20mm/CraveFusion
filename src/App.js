
import './App.css';

import Home from './screens/Home.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import {Login} from './screens/Login.js';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'




function App() {
  return (
   
<div>
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </div>
  </Router>
</div>
  );
}

export default App;
