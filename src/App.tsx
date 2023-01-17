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
import ProtectRoute from './components/ProtectRoute';

function App() {
  return (
    <>
      <UserAuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          
            <Route element={<ProtectRoute />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/timeline' element={<Timeline />} />
              <Route path='/success' element={<Success />} />
              <Route path='/export' element={<Export />} />
              <Route path='/delete' element={<Delete />} />
              <Route path='/mood-history' element={<MoodHistory />} />
              <Route path='/potential-triggers' element={<PotentialTriggers />} />
            </Route>    

          </Routes>
        </Router>
      </UserAuthProvider>
    </>
  );
}

export default App;
