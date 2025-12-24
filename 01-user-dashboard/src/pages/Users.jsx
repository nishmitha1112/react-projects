import {Link} from "react-router-dom";
import { useState,useEffect } from 
"react";

function Users(){
const [users, setUsers ] = useState([]);
const [loading,setLoading] = useState(true);
const [error,setError]= useState(null);

    useEffect(()=>{
  
       fetch("https://jsonplaceholder.typicode.com/users")
       .then((response)=>{
        if(!response.ok){
            throw new Error("Failed to fetch users");
        }
        return response.json();
       })
       .then((data)=>{
        setUsers(data);
        setLoading(false);
       })
       .catch((err)=>{
        setError(err.message);
        setLoading(false);
       });
    },[]);

    if(loading){
        return <h3>Loading users...</h3>
    }

    if(error){
        return <h3>Error: {error}</h3>
    }

    return(
        <div>
            <h2>Users Page</h2>
          <p>Total users : {users.length}</p>
        <ul>
            {users.map((user)=>(
             <li key={user.id}>
           <strong>{user.name}</strong>-{user.email}{" "}
           <Link to={`/users/${user.id}`}>View Details</Link>
             </li>
            ))}
        </ul>
      </div>
    );
}
export default Users;