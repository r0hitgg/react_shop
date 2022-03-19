import React from "react";
import store from "../store/store";
import { useNavigate } from "react-router-dom";
import { getProductsFunc } from "../store/reducers/product_list";

var Product = (props) => {
    const navigate = useNavigate();
    const onRemoveProduct = (event) => {
        console.log(event.target.value)
        fetch('http://localhost:2000/product', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: event.target.value})
        }).then((res) => { 
            return res.json()
        }).then((data) => {
            store.dispatch(getProductsFunc());
            navigate('/');
        });
    };

    return <tr>
        <td>
            {props.product.name}
        </td>
        <td>
            {props.product.price}
        </td>
        <td>
            <button className="btn btn-danger" value={props.product.name}
            onClick={onRemoveProduct}>
                Remove
            </button>
        </td>
    </tr>
};

export default Product;