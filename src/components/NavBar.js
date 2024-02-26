import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    // const navigate = useNavigate();
    // const location = useLocation();

    // const pathMatchRoute = (route) => {
    //     if (route === location.pathname) {
    //         return true;
    //     }
    // };

    return (
        <div className='topnav'>
            <h4 className='navTitle'>Math Resource Finder</h4>
            <ul className='navListItems'>
                <li className={'navListItem'}>Find Your Lesson Below</li>
            </ul>
        </div>
    );
}

export default NavBar;
