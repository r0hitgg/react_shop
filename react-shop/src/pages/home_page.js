import React from "react";
import Product from "../components/product";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const products = useSelector((state) => state.productList.products);

    const onAddNewProduct = () => {
        navigate('/add/product');
    };
    
    return (
        <div>
            <div className="p-3">
                <button className="btn btn-primary" onClick={onAddNewProduct}>
                    Add New Product
                </button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Price
                        </td>
                        <td>
                            Remove
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <Product product={product} key={product.name} />
                    ))}
                </tbody>
            </table>
            
            
        </div>
    );

};

export default HomePage;