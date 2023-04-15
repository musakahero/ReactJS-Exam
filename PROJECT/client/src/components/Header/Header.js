import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="page-header">
            <h1><Link to={"/"} style={{"textDecoration":'none'}}>Cozy Co </Link><small>Find your dream furniture!</small></h1>
        </div>
    )
}