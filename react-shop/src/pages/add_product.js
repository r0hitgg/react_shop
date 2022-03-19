import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../store/store";
import { getProductsFunc } from '../store/reducers/product_list';

const AddProduct = () => {
    const navigate = useNavigate();
    const [formError, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:2000/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(event.target)))
        }).then((res) => {
            if(res.ok){
                return res.json()
            }
            return res.json().then((err) => {
                throw new Error(err.message)
            });
            
        }).then((data) => {
            console.log(data)
            store.dispatch(getProductsFunc());
            navigate('/');
        }).catch((error) => {
            setError(`${error}`)
        });
        
    }

    return <form className="p-3" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">
                Name
            </label>
            <input type="text" id="name" name="name" placeholder="Name" required
                    className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="price">
                Price
            </label>
            <input type="number" id="price" name="price" placeholder="Price" required
                    className="form-control" />
        </div>
        <div>
            {formError}
        </div>
        <div className="form-group p-2">
            <button type="submit" value="submit" className="btn btn-primary">
                Add Product
            </button>
        </div>
    </form>
};

export default AddProduct;