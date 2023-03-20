import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import './Tools.css';

const Tools = () => {
    return (
        <div className='tool-bar'>
            <Navbar></Navbar>
            
            <div className='container-7'>
                <div className='box-2'>
                    <div className='tools'>
                    <h3>Tools</h3>
                    </div>

                    <div className='tools-item'> 
                    <Link to="/generator">Generator</Link>
                    <Link to="/">Import data</Link>
                    <Link to="/">Export vault</Link>


                    </div>
                    

                </div>
                </div>
        </div>
    );
};

export default Tools;