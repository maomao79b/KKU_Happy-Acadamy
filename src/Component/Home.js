import React from "react";
import '../CSS/HomePage.css'
import LoadData from "../Component/loadData.js"
import 'bootstrap/dist/css/bootstrap.min.css';
function HomePage(){
    return (
        <div className='container-fluid bg-color'>
        <LoadData />
            <div className='row'>
                <div className='col-6'>
                    this is left panal
                   
                </div>
                <div className='col-6'>
                    this is right panal
                    
                </div>
            </div>
        </div>

    // <div className="">    
    //     <div className="posts-container">
    //         <div className="post-card">
    //             <LoadData />
    //             <h1 className='post-body'>this is in post-card section</h1>
                
    //         </div>
    //     </div>
    //  </div>
     )
}
export default HomePage