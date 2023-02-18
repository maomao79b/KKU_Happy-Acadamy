import React,  {useState, useEffect}from "react";
import '../CSS/HomePage.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCustomers } from "../Model/loadData.js";
import { sendLoginToken } from "./Login";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function HomePage(){
  const [customers, setcustomers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


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
  const searchData =() => {
    const token = sendLoginToken();
    if(searchQuery !== null){
      const filteredData = customers?.filter(item =>
        item.name.includes(searchQuery)
        );
        console.log(filteredData)
      if(customers === null){
        const filteredData = customers
        setcustomers(filteredData)
      }else{
        setcustomers(filteredData)
      }
      // if(filteredData !== null){
      //   let jsonData = JSON.stringify(filteredData)
      //   setcustomers(jsonData)
      //   console.log(jsonData)
      // }else{
      //   let jsonData = ""
      //   console.log(jsonData)
      // }
    }
  }



  // if(filteredData !== null){
  //   setcustomers(setcustomers)
  // } 
  // let filteredData

  // if(searchQuery.length() !== 0){
  //     if(item.name === searchQuery){

  //     }elseif(contacts.get('name')){

  //     }elseif(item.username === searchQuery){

  //     }
  // }
  // setcustomers(filteredData)

  const search = (
    <Form>
      <Form.Control
          type="search"
          required
          name="search"
          // onChange={({ target })=> {
          //   setSearchQuery(target.value)
          //   searchData()
          // }}
        />
        <Button
            variant="primary"
            type=""
            style={{ height: "50px", textAlign: "center", textJustify: "auto" }}
            onChange={({ target })=> {
              setSearchQuery(target.value)
              searchData()
            }}
        >
            ค้นหา
        </Button>
    </Form>
  );

  return (
      <div className="container">
        {isLoading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="main-container">
            <div className="text-center">
            </div>
            <br/>
            <br/>
            <h1>ตารางรายชื่อลูกค้า</h1>
            {search}
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
