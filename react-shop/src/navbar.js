import React from 'react';
import Menu from './menu';


var NavBar = () => {
    const menus_name = [{
        'name': 'Home',
        'id': 1,
        'url': '/'
    }, {
        'name': 'About Us',
        'id': 2,
        'url': 'about_us'
    }, {
        'name': 'Contact Us',
        'id': 3,
        'url': 'contact_us'
    }];
    const items = [];

    menus_name.forEach(element => {
        items.push(<Menu menu={element} key={element.id} />);
    });


    return (<nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top'>
        <ul className='navbar-nav'>
            {items}
        </ul>
    </nav>);
};

export default NavBar;