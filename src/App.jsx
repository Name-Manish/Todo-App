import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/home/home";
import Task from "./pages/task/task";
import Create from "./pages/create/create";
import Login from "./pages/login/login";
import Register from "./pages/register/register"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/task" element={<Task />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>

    </>
  )
}

export default App
