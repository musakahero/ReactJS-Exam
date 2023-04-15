import { useForm } from "../../hooks/useForm";
import { ItemContext } from "../../contexts/ItemContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const Edit = ({ onEditSubmit }) => {
    const { items } = useContext(ItemContext);
    const { itemId } = useParams();
    const [itemToEdit] = items.filter( x => x._id === itemId); 
    console.log(itemToEdit);
    const {brand, type, imageUrl, price, description} = itemToEdit;
    
    const { values, changeHandler, onSubmit } = useForm({
        _id: itemId,
        brand: brand,
        type: type,
        imageUrl: imageUrl,
        price: price,
        description: description
    }, onEditSubmit);

    return (
        <form className="form-horizontal" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="inputBrand3" className="col-sm-2 control-label">Brand / Manufacturer</label>
                <div className="col-sm-10">
                    <input onChange={changeHandler} value={values.brand} name="brand" type="text" className="form-control" id="inputBrand3" placeholder="Item Brand / Manufacturer" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputType3" className="col-sm-2 control-label">Type</label>
                <div className="col-sm-10">
                    <input onChange={changeHandler} value={values.type} name="type" type="text" className="form-control" id="inputType3" placeholder="Item Type" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputImageUrl3" className="col-sm-2 control-label">Image URL</label>
                <div className="col-sm-10">
                    <input onChange={changeHandler} value={values.imageUrl} name="imageUrl" type="text" className="form-control" id="inputImageUrl3" placeholder="URL to Item Image" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputPrice3" className="col-sm-2 control-label">Price</label>
                <div className="col-sm-10">
                    <input onChange={changeHandler} value={values.price} name="price" type="text" className="form-control" id="inputPrice3" placeholder="Item Price in Leva" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputDescription3" className="col-sm-2 control-label">Description</label>
                <div className="col-sm-10">
                    <textarea onChange={changeHandler} value={values.description} name="description" id="inputDescription3" className="form-control" rows="3" placeholder="Color, comfort, etc."></textarea>
                </div>
            </div>


            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Create listing</button>
                </div>
            </div>
        </form>
    )
}