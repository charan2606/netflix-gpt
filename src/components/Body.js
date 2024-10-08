import React, { useEffect } from 'react';
import Browse from './Browse';
import Login from './Login' ;
import { Navigate, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';



const Body = () => {
    
    
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


  return (
    <div>
      <RouterProvider router = { appRouter}></RouterProvider>
    </div>
  )
}

export default Body
