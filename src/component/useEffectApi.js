import React,{useEffect,useState} from 'react'
import axios from "axios";

function UseEffectApi() {
    
        const [userList, setUserList] = useState([]);
      
        useEffect(() => {
          axios.get(' https://reqres.in/api/users?page=2').then(res => {
            setUserList(res.data.data);
          });
        }, []);
      
        return (
          <div className="container-fluid p-3">
            <h5 className="d-inline-block">Student Record </h5>
            <table className="table table-sm mt-3">
              <thead className="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
                </tr>
              </thead>
              <tbody>
                {
                    userList.map(curEle =>
                     <tr>
                  <td>{curEle.first_name}</td>
                  <td>{curEle.last_name}</td>
                  <td>{curEle.email}</td>
                  <td><img src={curEle.avatar} width="50" height="50" alt="imagenotfound" /></td>
                </tr>
                )}
                
              </tbody>
            </table>
      
          </div>
        );
      }
      
   
  
  export default UseEffectApi;
  