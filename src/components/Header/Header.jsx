import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.appHeader}>
            <img
                src='https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg'
                alt={'logo'}/>
        </header>
    );
}

export default Header;