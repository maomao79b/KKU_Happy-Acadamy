import { Modal } from "bootstrap";
import { useEffect, useState } from "react";

// function GetUser() {
//   fetch('http://localhost:8080/getUsers')
//   .then((response) => response.json())
//   .then((data) => { return data
//   });
// }
// export default GetUser
// function PostUser() {
//   fetch('http://localhost:8080/getUsers')
//   .then((response) => response.json())
//   .then((data) => { return data
//   });
// }
// module.exports  = { PostUser, GetUser};

const GetUsers = fetch('http://localhost:8080/getUsers')
.then(function (response) {
  return response.json() // แปลงข้อมูลที่ได้เป็น json
  // return "GET USER"
})
.then(function (data) {
  // console.log(data); // แสดงข้อมูล JSON จาก then ข้างบน
})

// const PostUsers = fetch('http://localhost:8080/getUsers')
// .then(function (response) {
//   // return response.json() // แปลงข้อมูลที่ได้เป็น json
//   return "POST USER"
// })
// .then(function (data) {
//   console.log(data); // แสดงข้อมูล JSON จาก then ข้างบน
// })

export default GetUsers
// export {PostUsers}