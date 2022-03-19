import React from "react";
import { NavLink } from "react-router-dom";

var Menu = (props) => {

    return (<li className="nav-item">
        <NavLink activeclassname="active" className="nav-link" to={props.menu.url}>
            {props.menu.name}
        </NavLink>
    </li>);

};

export default Menu;