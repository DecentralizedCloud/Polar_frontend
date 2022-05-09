import React, { useEffect,useState } from 'react';
import fire from './fire.js';
import Login from './Login.js';
import Hero from './Hero.js';
import './sigbtn.css';
const Signup = () =>
{
    const [user, setUser]=useState('');
    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError, setEmailError]=useState('');
    const [passwordError, setPasswordError]=useState('');
    const [hasAccount, sethasAccount]=useState('');

    const clearInputs =()=>{
        setEmail('');
        setPassword('');
    }
    const clearErrors=()=>{
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin=()=>{
        clearErrors();
        fire
           .auth()
           .signInWithEmailAndPassword(email,password)
           .catch((err)=>{
               switch(err.code)
               {
                   case "auth/invalid-email":
                   case "auth/user-disabled":
                   case "auth/user-not-found":
                       setEmailError(err.message);
                       break;
                   case "auth/wrong-password":
                       setPasswordError(err.message); 
               }
           });
    };
    const handleSignup=()=>{
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((err)=>{
            switch(err.code)
            {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message); 
            }
        });
    };

    const handleLogout=()=>{
        fire.auth().signOut();
    };

    const authListener=()=>{
        fire.auth().onAuthStateChanged(user =>{
            if(user)
            {
                clearInputs();
                setUser(user);
            }
            else{
                setUser("");
            }
        });
    };

    useEffect(()=>{
        authListener();
    },[]);

    return(

        <>
        {user ? (
            <Hero handleLogout={handleLogout}/>
        ):(
            <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            sethasAccount={sethasAccount}
            emailError={emailError}
            passwordError={passwordError}
        />
        )}
        
        
        </>
    );

}
export default  Signup;