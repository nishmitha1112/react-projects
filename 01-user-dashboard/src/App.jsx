//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import {Routes,Route} from "react-router-dom";
//import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/users';
import UserDetails from './pages/UserDetails';


function App() {
 // const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/users" element={<Users />}/>
   <Route path="/users/:id" element={<UserDetails/>}/>
   </Routes>
    </div>
  );
}

export default App