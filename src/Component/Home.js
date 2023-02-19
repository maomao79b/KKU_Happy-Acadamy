import React,  {useState, useEffect}from "react";
import '../CSS/HomePage.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCustomers } from "../Model/loadData.js";
import Form from "react-bootstrap/Form";
import Navbar from "./Nav";
import axios from "axios";
import { useNavigate } from "react-router";

function Home(){
  const navigate = useNavigate();
  const [customers, setcustomers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);


  useEffect(() => {
    if (localStorage.getItem('loginStatus') === 'false') {
      navigate('/');
    }
    setIsLoading(true);
    const token = localStorage.getItem('accessToken');
    const url = '/customers';
    if(token !== null){
      if(searchQuery === null){
        console.log(2)
        getCustomers(url, token)
          .then(response => {
          setcustomers(response.data)
          setIsLoading(false);
          if(response.status !== 200){
            console.log(response.status);
          }
          })
          .catch(error => {
            console.log(error);
          });
        }
      }
  },[]);


  // }
  async function searchData() {
    const token = localStorage.getItem('accessToken');
    const c = ''
    if(token !== null){
      if(searchQuery !== null){
        axios.get(`/customers?search=${searchQuery}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setcustomers(response.data);
          console.log(response.data)
        if(response.status !== '200'){
          console.log(1)
          searchQuery(c)
          console.log(response.status);
        }
      })
      .catch(error => {
        console.log(error);
      });
      }
    }
  }

  const search = (
    <Form>
      <Form.Control
          type="search"
          required
          name="search"
          // value={({searchQuery})}
           onChange={({ target })=> {
            setSearchQuery(target.value)
            searchData()
          }}
        />
    </Form>
  );

  return (
    <>
      <Navbar />
      <div className="container mb-6" style={{margin:"auto auto"}}>
        {isLoading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="main-container">
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
    </>
     )
}
export default Home


