import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer, Home, Login, SignUp, Profile, Timeline } from './routes/routes';
import './styles/App.scss';
import React from 'react'

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>

        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/timeline' element={<Timeline />}></Route>

        
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
