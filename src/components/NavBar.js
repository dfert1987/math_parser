import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true;
        }
    };

    return (
        <div className='topnav'>
            <h4 className='navTitle'>Steve's Math Thing</h4>
            <ul className='navListItems'>
                <li
                    className={
                        pathMatchRoute('/')
                            ? 'navListItem selected'
                            : 'navListItem'
                    }
                    onClick={() => navigate('/')}>
                    Upload
                </li>
                <li
                    className={
                        pathMatchRoute('/lessons')
                            ? 'navListItem selected'
                            : 'navListItem'
                    }
                    onClick={() => navigate('/lessons')}>
                    Lessons
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
