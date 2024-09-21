import React, { useRef } from 'react'
import Header from './Header'
import ImageComponent from './ImageComponent';
import { useState } from 'react';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    
        const [isSignInform, setIsSignInForm] = useState(true);
        const [errorMessage, setErrorMessage] = useState(null);
        const navigate = useNavigate();
        const dispatch = useDispatch();

        
        
        const email = useRef(null) ;
        const password = useRef(null) ;
        const fname = useRef(null);
        
        const toggleSignInForm =() =>{
            setIsSignInForm(!isSignInform);
       }
        const  handleButtonClick =() => {
            //Validate the form data
           // console.log(email.current.value);
           // console.log(password.current.value);
            const message = checkValidData(email.current.value, password.current.value);

            setErrorMessage(message);
            
            if(message) return; // If email or password is not valid return this

            //Signin signup logic
            if(!isSignInform){
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value)
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  updateProfile(user, {
                    displayName: fname.current.value, photoURL: "https://tse2.mm.bing.net/th?id=OIP.efATY6p5-5aINwEzOqYKFwAAAA&pid=Api&P=0&h=220"
                  }).then(() => {
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(addUser( { uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                    navigate("/browse");
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode + "" + errorMessage)
                });

            }else{
                    //signin logic
                    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                    // Signed in 
                     const user = userCredential.user;
                         console.log(user)
                         navigate("/browse")
                     
                    })
                    .catch((error) => {
                         const errorCode = error.code;
                         const errorMessage = error.message;
                         setErrorMessage(errorCode + " " + errorMessage );
                     });
            }
            
        };
  return (
    <div>
     <Header/>

     <div className= "absolute">  
      <ImageComponent/>
     </div>
    
    <form  onSubmit={(e) => e.preventDefault()} className= "w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">{isSignInform? "Sign In" :"Sign Up"}</h1>

        { !isSignInform && <input ref={fname} type="text" placeholder ="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}

        <input ref={email} type="text" placeholder ="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        
        <input ref={password} type="password" placeholder ="Password" className="p-4 my-4 w-full bg-gray-700"/>

        <p className="text-red-500 font-bold text=lg py-2 ">{errorMessage}</p>

        <button className= "p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInform? "Sign In" :"Sign Up"}</button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInform? "New to Netflix? Sign Up Now" : "Already Registered? Signin"}</p>
    </form>
   
</div>
  );
};

export default Login