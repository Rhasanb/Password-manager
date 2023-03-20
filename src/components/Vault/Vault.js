// import image from './Search.svg';
import Navbar from '../Navbar/Navbar';
import './Vault.css';
import { Link } from 'react-router-dom';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { useState } from 'react';



const Vault = () => {
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

        <div className='vault'>
            <Navbar></Navbar>
          <div className='container'>
          <div className='main-box'>
        <div  className='filter'>
            <h3>Filter</h3>
        </div>
            <div className='secondary-box'>
         <div className='all-filter'>
            <input className='search' type="Search" placeholder='Search'/>
            <div className='Link'>
            <Link to='/'>My Vault</Link>
            <Link to='/'>New Organisation</Link>
            </div>
            

         </div>
            <hr/>
          <div className='all-items'>
            
            <Link to="/">Favourites</Link>
            <Link to='/'>Login</Link>
            <Link to='/'>Card</Link>
            <Link to='/'>Identity</Link>
            <Link to='/'>Secure Note</Link>

          </div>
          <hr/>
          <div>
            
            <Link to='/'>Folders</Link>
            <Link to='/'>Bin</Link>
           </div>
           </div>    
           </div>
       
        <div className='container-2'>
                <div className='Vault-container'>
                <h2>All vaults</h2>
                <button onClick={toggleModal}    className=' btn-modal item'><AddSharpIcon/>New Item</button>
                {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className='new-item'>
            <h2>New Item</h2>
            </div>
            <hr/>
            <div className='select'>
            <label for="item-select">What Type of item is this?</label>
            
            <select name="new-item" id="new-select">
                <option value="">--Please choose an option--</option>
                <option value="login">Login</option>
                <option value="card">Card</option>
                <option value="identity">Identity</option>
                <option value="secure">Secure note</option>
                
            </select>
            </div>
            
            
          <div  className='input-field'>
          
          <input type="text" id="name" name="name" placeholder='Name'/>
           <input type="text" id="name" name="name" placeholder='User Name'/>
           <input type="text" id="name" name="name" placeholder='Password'/>
           <input type="text" id="name" name="name" placeholder='URL'/>
           
         
           
          </div>

          <div >
            <button className='btn1'>Save</button>
            <button  className='btn2'>Cancel</button>
          </div>     
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                
                </div>
                <div>
               
                <small>There are no items to list</small>
                </div>
            </div>
            <div id='card'>
                <div className='email'>
                <span>Verify Email</span>
                </div>
                <div>
                    <p>Verify your account's email address to unlock access to all features.</p> 
                </div>
                <div className='button'>
                    <button>Send Email</button>
                    </div>  
            </div>
          </div>
           <hr className='hr'/>
            <div className='footer'>
              <footer><span>
                 {`${copyright} ${year} `}
              </span></footer>
            </div>

           </div>
            

           
        
        
    );
};

export default Vault;








