import { Link, useParams } from 'react-router-dom';
import * as itemService from '../services/itemService';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export const ItemDetails = () => {
    const { userId, token } = useContext(AuthContext)
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        itemService.getOne(itemId, token)
            .then(result => {
                setItem(result);
            })
    }, [itemId]);

    return (
        <div className="jumbotron" >
            <div className=".container" style={{ "marginLeft": "80px" }}>
                <img src={item.imageUrl} style={{ "width": "auto", display: "inline" }} />
                <p style={{ "display": "inline", "margin": "15px" }}>{item.description}</p>
                <h2>{`${item.brand} ${item.type}`}</h2>
                <h3>{`Price: ${item.price} lv`}</h3>
                <span><Link className="btn btn-primary btn-lg" to={`/catalog/${itemId}/edit`} role="button" style={{ 'display': 'inline', "marginRight": "15px" }}>Edit</Link></span>
                <span><button className="btn btn-primary btn-lg" href="#" style={{ 'display': 'inline' }}>Delete</button></span>
            </div>

        </div>
    )
}