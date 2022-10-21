import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logout from './features/Logout';
import PersistLogin from './features/PersistLogin';
import Signup from './features/SignUp';
import Login from './features/Login';
import PrivateRoute from './routes/PrivateRoute';
import PublicOnlyRoute from './routes/PublicRoute';
import { Navbar, Footer, Home, SignUp, Profile, Timeline } from './routes/routes';
import './styles/App.scss';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route element={<PersistLogin />}>
                <Route path="/" element={
                  <PrivateRoute>
                    <Timeline />
                  </PrivateRoute>
                } />
                <Route path="/logout" element={
                  <PrivateRoute>
                    <Logout />
                  </PrivateRoute>
                } />
                <Route path="/update-profile" element={
                  <PrivateRoute>
                    <Profile/>
                  </PrivateRoute>
                }/>
              
              <Route path="/login" element={
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute> 
              }/>
              <Route path="/signup" element={
                <PublicOnlyRoute>
                  <Signup />
                </PublicOnlyRoute> 
              }/>
              </Route>
        
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
