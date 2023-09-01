import React from 'react';
import style from '../css/Header.module.css'
import {NavLink} from 'react-router-dom';
function Header(props) {

    return (
        <div className={style.container}>
            <div className={style.nav}>
                <NavLink className={style.navEl} to='./Color'>Settings</NavLink>
                <NavLink className={style.navEl} to='./Result'>Groups</NavLink>
            </div>
        </div>
    );
}

export default Header;