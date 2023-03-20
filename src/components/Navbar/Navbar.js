import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DropDown from '../DropDown/DropDown';

import './Navbar.css';




const Navbar = () => {
    const [openProfile, setOpenprofile]= useState(false);
    const [fix,setfix] = useState(false);
    
    function setfixed(){
        if(window.scroll >=320){
            setfix(true)
        }
        else{
            setfix(false)
        }
        
    }

    
    window.addEventListener("scroll",setfixed)

    return (
        <div >
            <nav  className={fix ? 'navbar fixed ':'navbar'}> 
           
           <Link  to="/Vault">Vault </Link>
           <Link to="/send"> Send</Link>
           <Link to="/tools"> Tools</Link>
           <Link to="/Reports"> Reports</Link>
          
            <span className='spes' onClick={()=> setOpenprofile((prev)=>(!prev))}>Other Settings <i class="arrow down"></i></span>
           
           
           {/* <Button></Button> */}
           {
            openProfile && <DropDown/>
           }
           
           
         </nav>
         
        </div>
    );
};

export default Navbar;