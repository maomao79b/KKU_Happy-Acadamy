import React, { useState, useEffect } from "react";
import "../CSS/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCustomers } from "../Model/loadData.js";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Nav";
import axios from "axios";
import { useNavigate } from "react-router";
import Pagination from "react-bootstrap/Pagination";

function Home() {
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 10;
  const [customers, setcustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [countPage, setCountPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const itemsToDisplay = customers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(customers.length / ITEMS_PER_PAGE);
  const token = localStorage.getItem("accessToken");
  const url = "/customers";
  const handlePageChange = (page) => {
    setCountPage(page*10)
    setCurrentPage(page);
    setIsLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem("loginStatus") === "false") {
      navigate("/");
    }
    setIsLoading(true);
    if (token !== null) {
      if (searchQuery === null) {
        getCustomers(url, token)
          .then((response) => {
            setcustomers(response.data);
            setIsLoading(false);
            if (response.status !== 200) {
              console.log(response.status);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, []);
  async function searchData() {
    const token = localStorage.getItem("accessToken");
    const c = [];
    if (token !== null) {
      if (searchQuery !== {}) {
        axios
          .get(`/customers?search=${searchQuery}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            setcustomers(response.data);
            console.log(response.data);
            if (response.status !== "200") {
              console.log(1);
              searchQuery(c);
              console.log(response.status);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  const search = (
    <Form>
      <Form.Control
        className="floating-label"
        placeholder="ค้นหา"
        type="search"
        required
        name="search"
        // value={({searchQuery})}
        onChange={({ target }) => {
          setSearchQuery(target.value);
          searchData();
        }}
      />
    </Form>
  );

  return (
    <>
      <Navbar />
      <div className="container mb-6" style={{ margin: "auto auto" }}>
        {isLoading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="main-container">
            <h1 style={{ marginTop: "20px" }}>ตารางรายชื่อลูกค้า</h1>
            {search}
            <br />
            <table className="table">
              <thead>
                <tr>
                  <th>ลำดับที่</th>
                  <th>ชื่อ</th>
                  <th>นามสกุล</th>
                  <th>ชื่อผู้ใช้</th>
                </tr>
              </thead>
              <tbody>
                {itemsToDisplay.map((item,i) => (
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination>
              <Pagination.First
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
              />
              <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              />
              {Array.from({ length: totalPages }).map((_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              />
              <Pagination.Last
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(totalPages)}
              />
            </Pagination>
          </div>
        )}
      </div>
    </>
  );
}
export default Home;