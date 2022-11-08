import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Login, SignUp, Profile, Timeline, Success, MoodHistory, PotentialTriggers, Export, Delete } from './routes/routes';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/timeline' element={<Timeline />}></Route>

        <Route path='/success' element={<Success />}></Route>
        <Route path='/export' element={<Export />}></Route>
        <Route path='/delete' element={<Delete />}></Route>
        <Route path='/mood-history' element={<MoodHistory />}></Route>
        <Route path='/potential-triggers' element={<PotentialTriggers />}></Route>
      </Routes>
    </Router>
  );
}

export default App;