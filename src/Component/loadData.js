import { useEffect, useState } from "react";
function LoadData() {
    const [userall, setData] = useState([]);
    async function loadCars () {
        fetch('http://localhost:8080/getCars')
        .then((response) => response.json())
        .then((data) => {setData(data)
        // console.log(data)
        // console.log(data.userall)
        });
        
    }
    console.log(userall)
    useEffect(() => {
      loadCars();
    }, []);
    return (
        <div>
            {userall.map((cars) => (
              <tr key={cars.username}>
                <td>{cars.car_id}</td>
                <td>{cars.car_brand}</td>
                {/* <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td> */}
              </tr>
            ))}
        </div>
    );
}
export default LoadData;