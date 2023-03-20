import React from 'react';

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Drop.css';

const DropDown = () => {
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
        navigate("/signin");
      }
    });
    return (
        <div className='flex flex-col dropdownProfile'>
           
            <ul className='flex flex-col gap-4'>
            
             
                <button>Profile</button>
                <button>Account settings</button>
                <button onClick={handleLogOut}>Logout</button>
             
            </ul>
        </div>
    );
};

export default DropDown;

