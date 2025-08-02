import {Navigate, Route,Routes} from 'react-router-dom';
import Navber from './components/Navber';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { useAuthContext } from './hooks/useAuthContext';


function App() {
  const {user}=useAuthContext();

  return (
    <div className="app bg-slate-900 text-slate-100 min-h-screen ">
    <Navber/>
    <Routes>
      <Route path="/" element={user ?<Home />:<Navigate to="/login"/>} />
      <Route path="/login" element={!user? <Login />:<Navigate to="/"/>} />
      <Route path="/signup"  element={!user? <Signup />:<Navigate to="/"/>} />
      <Route path="*" element={<Navigate to="/"/>}></Route>
      </Routes>
    <Footer/>
       
    </div>
  );
}

export default App;
