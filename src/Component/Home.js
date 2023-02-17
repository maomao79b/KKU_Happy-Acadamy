import React,  {useState, useEffect}from "react";
import '../CSS/HomePage.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCustomers } from "../Model/loadData.js";

const url = '/customers';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvbyIsImV4cCI6MTY3NjY2MjIwOSwiaXNzIjoic3Vrc2FuLmdyb3VwIn0.Y-CFDAKWTUEWGC1DMv8QPdODQUUWCDQlapPuOnQ-c7o';


function HomePage(){
    let datas
    const [users, setUsers] = useState(null);
    
    getCustomers(url, token)
    .then(response => {
    setUsers(response.data)
    })
  .catch(error => {
    console.log(error);
  });
    return (
            
        <div className='container-fluid bg-color'>
            <div className='row'>
                <div className='col-6'>
                    this is left panal
                    <br/>
                    <br/>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users?.map((item,i) => (
                            <tr key={i}>
                              <td>{i}</td>
                              <td>{item.name}</td>
                              <td>{item.surname}</td>
                              <td>{item.username}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    
                </div>
                <div className='col-6'>
                    this is right panal
                          
                </div>
            </div>
        </div>
     )
}
export default HomePage