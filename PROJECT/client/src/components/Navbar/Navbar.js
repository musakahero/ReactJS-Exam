import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
    const { isAuthenticated, userEmail, userId } = useContext(AuthContext);
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">

                </div>
                <ul className="nav navbar-nav">
                    {/* Apply className="active" when button is clicked */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>

                    {isAuthenticated && <li><Link to="/create">Create New Listing</Link></li>}

                </ul>

                {/* Search bar */}
                {/* <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form> */}

                <ul className="nav navbar-nav navbar-right">
                    {!isAuthenticated ?
                        <><li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li></>
                        : 
                        <><li><Link to={`/${userId}/profile`}>Hello, {userEmail}</Link></li>
                            <li><Link to="/logout">Logout</Link></li></>
                    }
                    
                </ul>

            </div>
        </nav>
    )
}