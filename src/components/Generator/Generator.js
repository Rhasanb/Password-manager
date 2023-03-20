import React from 'react';
import Tools from '../Tools/Tools';
import './Generator.css';

const Generator = () => {
    return (
        <div className='main-container'>
            <Tools></Tools>
            <div className='container-9'>
                <div className='box-4'>
                <h1>Generator</h1>
                <div className='span-body'>
                    <span>AKHFDBNHFHGDGK%UG</span>
                </div>
                
                <div className='span-1'>
                    <h4>What would you like to generate</h4>
                </div>
                <div className='password'>
                <label for="vehicle1">Password</label>
                <input type="radio" id="" name="" value=""/>
                <label for="vehicle1">Username </label>
                <input type="radio" id="" name="" value=""/>
                </div>
                   
                <div className='form-1'>
                <span>Password type!</span>
                <br></br>
                    <form className='form-1' >
                <label for="vehicle1">Password</label>
                <input type="radio" id="" name="" value=""/>
                <label for="vehicle1">Passphrase </label>
                <input type="radio" id="" name="" value=""/>
                    </form>
               
                </div>
                <div>
                    
                    <div className='form-2'>
                        <form>
                        <label for="fname">Length:</label>
                        <input type="text" id="fname" name="fname" value=""/>
                        <label for="lname">Minimum Number:</label>
                        <input type="text" id="lname" name="lname" value=""/>
                        <label for="lname">Minimum Special:</label>
                        <input type="text" id="lname" name="lname" value=""/>
                        </form>
                    </div>
                    <div className='form-a'>
                        <span>Option</span>
                        <form className='form-3'>
                        <label for="fname">A-Z</label>
                        <input type="checkbox" id="fname" name="fname" value=""/>
                        <label for="lname"> a-z</label>
                        <input type="checkbox" id="lname" name="lname" value=""/>
                        <label for="lname">0-9</label>
                        <input type="checkbox" id="lname" name="lname" value=""/>
                        </form>
                        <button className='btn1'>Regenerator</button>
                        <button className='btn2'>Copy Password</button>

                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Generator;