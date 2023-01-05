import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  Login,
  SignUp,
  Profile,
  Timeline,
  Success,
  MoodHistory,
  PotentialTriggers,
  Export,
  Delete,
} from './routes/routes';
import './styles/App.scss';
import { UserAuthProvider } from './context/UserAuth';

function App() {
  return (
    <>
      <UserAuthProvider>
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
            <Route
              path='/potential-triggers'
              element={<PotentialTriggers />}></Route>
          </Routes>
        </Router>
      </UserAuthProvider>
    </>
  );
}

export default App;
