import React, { useEffect } from 'react';
import Browse from './Browse';
import Login from './Login' ;
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser, addUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Body = () => {
    const dispatch = useDispatch();
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "/browse",
            element: <Browse />,

        },
    ]);

    useEffect(() =>
    {
       
        onAuthStateChanged(auth, (user) => {
        if (user) {
             const { uid, email, displayName, photoURL } = user;
             dispatch(addUser( { uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
         } else {
         dispatch(removeUser());
         }
    });
    },[]);
  return (
    <div>
      <RouterProvider router = { appRouter}></RouterProvider>
    </div>
  )
}

export default Body
