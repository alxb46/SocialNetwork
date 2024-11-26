import React from 'react';
import style from './Header.module.css';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.appHeader}>
            <img
                src='https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg'
                alt={'logo'}/>
            <div className={style.loginBlock}>
                {props.isAuthenticated ? props.login
                    : <Link to={'/login'}>Login</Link>
                }
            </div>
        </header>
    );
}

export default Header;