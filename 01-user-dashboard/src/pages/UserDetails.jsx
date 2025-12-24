import { useState , useEffect} from "react";
import {useParams,Link} from "react-router-dom";
function UserDetails(){
    const {id} = useParams();
   // console.log("User ID from URL:",id);
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{
        if(!id) return;
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            if(!response.ok){
                throw new Error("Failed to fetch user");
            }
            return response.json();
        })
        .then((data)=>{
            setUser(data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
        });
    },[id]);
    if(loading){
        return <h3>Loading user...</h3>;
    }
    if(error){
        return <h3>Error: {error} </h3>;
    }
    return(
        <div>
            <h2>User Details</h2>
    <p><strong>Name:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>phone:</strong> {user.phone}</p>
     <p><strong>Website:</strong> {user.website}</p>
           <Link to="/users">Back to users</Link>
        </div>
    );
}

export default UserDetails;
