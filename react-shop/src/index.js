import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home_page';
import AboutUs from './pages/about_us';
import ContactUs from './pages/contact_us';
import AddProduct from './pages/add_product';
import ReactDOM from 'react-dom';
import NavBar from './navbar'; 
import Footer from './components/footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { getProductsFunc } from './store/reducers/product_list';

store.dispatch(getProductsFunc());


const NewComponent = () => {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about_us" element={<AboutUs />} />
                <Route path="/contact_us" element={<ContactUs />} />
                <Route path="/add/product" element={<AddProduct />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );

};

ReactDOM.render(
    <Provider store={store}>
        <NewComponent/>
    </Provider>
    ,
    document.getElementById("root")
);

export default NewComponent;