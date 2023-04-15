import { Link } from "react-router-dom"

export const CatalogItem = ({ _id, imageUrl, type, brand, description, price }) => {
    
    return (
        <div className="row" style={{"width":"auto"}}>
            <div className="col-sm-6 col-md-4" style={{"width":"fit-content"}}>
                <div className="thumbnail">
                    <img src={imageUrl} alt={`${brand} ${type}`} />
                    <div className="caption">
                        <h3>{`${brand} ${type} `}</h3>
                        <p>{description}</p>
                        <h5>{`${price} lv`}</h5>
                        <p><Link to={`/catalog/${_id}`} className="btn btn-primary" role="button">Details</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}