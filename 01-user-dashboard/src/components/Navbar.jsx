 import {Link} from "react-router-dom"
function Navbar(){
    return(
        <nav>
        <h2>User Dashboard</h2>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
       
        </ul>
        </nav>
    );
}
export default Navbar;