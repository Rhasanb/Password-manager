import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Report.css';

const Reports = () => {
    const state=[
        {
            id:1,
            icon:'./image/search.png',
            heading: "Exposed passwords",
            text: "Passwords exposed in a data breach are easy targets for attackers.Change these passwords to prevent potential break-ins"
        },

        {
            id:2,
            icon:'./image/search-1.png',
            heading: "Reused passwords",
            text: "Reusing passwords makes it easier for attackers to break into multiple accounts."

        }



    ]
    return (
        <div>
            <Navbar></Navbar>
            <div className='container'>
            {

state.map((info)=>(
   <div className="col-6 bgMain">
                            <div className="services_box">
                                <img src={info.icon} alt="" className='commonIcons' />
                                <h4 className="services_box-header">{info.heading}</h4>
                                <p className="services_box-p">{info.text}</p>
                            </div>
                        </div>

))
}

            </div>

            
        </div>
    );
};

export default Reports;



