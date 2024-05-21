import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:8088/user/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("response1", response);
      response = await response.json();
      console.log("response2", response);
      setData(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div>
      <h1> Users List</h1>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          
            {data.map((item) => (
              <tr>
                <td>{item.userName}</td>
                <td>{item.userEmail}</td>
                <td>{item.userPassword}</td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default Users;
