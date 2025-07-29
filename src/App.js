import {Route,Routes} from 'react-router-dom';
import Navber from './components/Navber';
import Footer from './components/Footer';

import Home from './pages/Home';

function App() {
  return (
    <div className="app bg-slate-900 text-slate-100 min-h-screen ">
    <Navber/>
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    <Footer/>
       
    </div>
  );
}

export default App;
