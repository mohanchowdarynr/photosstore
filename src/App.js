import React, { useEffect, useState } from "react";
import { projectAuth } from './firebase/config';
import './App.css';
import Login from "./comps/Login";
import Header from "./comps/Header";
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [ user,setUser] = useState('');
  const [ email,setEmail] = useState('');
  const [ password,setPassword] = useState('');
  const [ emailError,setEmailError] = useState('');
  const [ passwordError,setPasswordError] = useState('');
  const [ hasAccount, setHasAccount] = useState('');
  const [selectedImg, setSelectedImg] = useState(null);
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = () => {
    clearErrors();
    projectAuth.signInWithEmailAndPassword(email,password)
    .catch((err) => {
      switch (err.code){
        case "auth/Invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
         setEmailError(err.message);
         break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };
  const handleSignUp = () => {
    clearErrors();
    projectAuth.createUserWithEmailAndPassword(email,password)
    .catch((err) => {
      switch (err.code){
        case "auth/mail-already-in-use":
        case "auth/invalid-email":
         setEmailError(err.message);
         break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    })
  }
  const handleLogOut = () => {
    projectAuth.signOut();
  }

  const authListener = () => {
    projectAuth.onAuthStateChanged((user) => {
      if (user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  };
   useEffect(() => {
     authListener();
   }, []);

  return (
    <div className="App">
    {user ? (<>
      <Header handleLogOut={handleLogOut}/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      </>
      ):(
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />
      )}
     
     
    </div>
  );
}

export default App;
