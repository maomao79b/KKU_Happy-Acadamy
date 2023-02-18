import React,  {useState, useEffect}from "react";
import '../CSS/HomePage.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCustomers } from "../Model/loadData.js";
import { sendLoginToken } from "./Login";

function HomePage(){
  const [customers, setcustomers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const token = sendLoginToken();
    const url = '/customers';
    if(token !== null){
      getCustomers(url, token)
        .then(response => {
        setcustomers(response.data)
        setIsLoading(false);
        if(response.status !== 200){
          // setIsLoading(false);
          console.log(response.status);
        }
        })
        .catch(error => {
          console.log(error);
        });
      }
  }, []);

  // if (isLoading) {
  //   return <div className="loader">Loading...</div>;
  // }
  
  // const token = sendLoginToken();
  // const url = '/customers';
  // if(token !== null){
  //   getCustomers(url, token)
  //     .then(response => {
  //     setcustomers(response.data)
  //     if(response.status !== 200){
  //       console.log(response.status);
  //     }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   }
  return (
      <div className="container">
        {isLoading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="content">
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
                {customers?.map((item,i) => (
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
          )}
      </div>
     )
}
export default HomePage
