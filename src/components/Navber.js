import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const{user}=useAuthContext();
  const{logout}=useLogout();
  const handleLogout=()=>{
    logout();

  }
  return (
    <div className="navbar container mx-auto h-20 flex items-center justify-between border-b border-sky-900">
      <Link to="/" className="logo text-2xl font-medium text-sky-400">ExpressJs</Link>
 <nav className="flex gap-5">
{
  !user && (
          <nav className="flex gap-5">
        <Link to="/login" className="hover:text-sky-400 duration-300">Login</Link>
        <Link to="/signup" className="hover:text-sky-400 duration-300">Signup</Link>
      </nav>
  )
}
{
  user && (
    <div className='flex gap-5 items-center'>
      <span>{user.email}</span>
     <button onClick={handleLogout} type="submit" className="bg-rose-500 text-white py-3 px-5 rounded-lg hover:text-slate-900 duration-300">LOGOUT</button>
    </div>
  )
}

      </nav>
    </div>
  );
};

export default Navbar;
