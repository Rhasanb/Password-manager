import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Send.css';
// import img from "./search-1.svg";
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { useState } from 'react';
const Send = () => {
    const [modal, setmodal]= useState(false);
    const toggleModal=()=>{
      setmodal(!modal)
    }
    if(modal){
      document.body.classList.add('active-modal')
    }else{
      document.body.classList.remove('active-modal')
    }

    const copyright = String.fromCodePoint(0x00A9);
    const year = '2023';
    return (
        <div className='send'>
            <Navbar></Navbar>
            <div className='container-3'>
                <div className='box-1'>
                    <div className='filter-2'>
                        <h3>Filters</h3>
            
                    </div>

                    <div className='container-4'>
                    <div className='search-2'>
                        <input type="search" placeholder='Search sends'/>
                    </div>
                    <hr/>
                    <div className='types'>
                        <Link to='/'>Text</Link>
                        <Link to='/'>File</Link>


                    </div>
                    </div>
                    

                </div>
                

                <div className='container-5'>

                <div className='sends'>
                <h3>Send</h3>
                    <button className='item'onClick={toggleModal} ><AddSharpIcon/>New Send</button>
                    {modal && (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className='new-item'>
        <h2>New Item</h2>
        </div>
        <hr/>
        <div className='input-field'>
        <input type="text" placeholder='name'/> 
            <label for="vehicle1">Text</label>
            <input type="radio" id="" name="" value=""/>
            <label for="vehicle1"> File</label>
            <input type="radio" id="" name="" value=""/>
        </div>
        <div>
            <button className='btn1'>Save</button>
            <button className='btn2'>Cancel</button>
          </div>
          <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
        </div> 
        
        </div> 
              )}

                </div>
                <hr/>
                
                    
                    {/* <div className='image'>
                        <img src={img} alt=''/>
                    </div> */}
                        <small>There are no sends to list.</small>
                </div>
                
            
            </div>
            <hr className='hr'/>
            <div className='footer' >
              <footer><span>
                 {`${copyright} ${year} `}
              </span></footer>
            </div>
            

      </div>
    );
};

export default Send;


 
