import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer, Home, Login, SignUp, Profile } from './routes/routes';
import './styles/App.scss';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>

        <Route path='/profile' element={<Profile />}></Route>

        
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
