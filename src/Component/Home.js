import React from "react";
import '../CSS/HomePage.css'
import LoadData from "../Model/loadData.js"
import 'bootstrap/dist/css/bootstrap.min.css';
function HomePage(){
    return (
            
        <div className='container-fluid bg-color'>
            <div className='row'>
                <div className='col-6'>
                    this is left panal
                    {/* <LoadData /> */}
                </div>
                <div className='col-6'>
                    this is right panal
                          
                </div>
            </div>
        </div>
     )
}
export default HomePage