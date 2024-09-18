import React from 'react'
import Header from './Header'
import ImageComponent from './ImageComponent';
import { useState } from 'react';

const Login = () => {
    
        const [isSignInform, setIsSignInForm] = useState(true);
        
        const toggleSignInForm =() =>{
            setIsSignInForm(!isSignInform);
       }
  return (
    <div>
     <Header/>

     <div className= "absolute">  
      <ImageComponent/>
     </div>
    
    <form className= "w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">{isSignInform? "Sign In" :"Sign Up"}</h1>
        { !isSignInform && <input type="text" placeholder ="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
        <input type="text" placeholder ="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        
        <input type="password" placeholder ="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <button className= "p-4 my-6 bg-red-700 w-full">{isSignInform? "Sign In" :"Sign Up"}</button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInform? "New to Netflix? Sign Up Now" : "Already Registered? Signin"}</p>
    </form>
   
</div>
  );
};

export default Login