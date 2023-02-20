import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TableWithPagination({ data, itemsPerPage }) {
  const [activePage, setActivePage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the data to display on the current page
  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page selection
  const handlePageSelect = (eventKey) => {
    setActivePage(eventKey);
  };

  return (
    <>
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
          {currentData.map((item,i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.username}</td>

            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination
        className="justify-content-center"
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={data.length}
        pageRangeDisplayed={5}
        changePage={handlePageSelect}
        onChange={handlePageSelect}
      /> */}
    </>
  );
}
export default TableWithPagination
