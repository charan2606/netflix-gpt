import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { removeUser, addUser } from '../utils/userSlice';

import { onAuthStateChanged } from 'firebase/auth'; 
import { useDispatch } from 'react-redux';
import { LOGO } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  
  const handleSigOut = () =>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('error');
      });
    
  };
  useEffect(() =>
    {
       
       const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
             const { uid, email, displayName, photoURL } = user;
             dispatch(addUser( { uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
             navigate("/browse");
         } else {
         dispatch(removeUser());
         navigate('/');
         }
    });
    // unsubscribe when my component unmounts
    return() => unsubscribe(); // Event listener
    },[]);
  return (
    <div className ="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between ">
    <img className= "w-44" src = {LOGO} alt='logo' />
    
    {user && (
    <div className='flex p-2'>
    <img
            className="hidden md:block w-12 h-12"
            src={user?.photoURL}
            alt="usericon"
          />
      <button onClick={handleSigOut} className=' font-bold text-white'>( Sign Out ) </button>      
    </div>)}
    </div>
  );
}

export default Header
