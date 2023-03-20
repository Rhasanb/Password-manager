import React from 'react';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Button = () => {

    const auth = getAuth();
    const navigate = useNavigate();
  
    const handleLogOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/signin");
      });
    };
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(auth.currentUser);
      } else {
        // User is signed out
        navigate("/singin");
      }
    });
    return (
        <div>
            <button className='btn' onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default Button;