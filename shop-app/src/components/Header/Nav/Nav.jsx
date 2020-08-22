import React from "react"
import style from './../Header.module.scss'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <ul className={style.nav}>
            <li><NavLink to={'/'} exact activeClassName={style.active}>Home</NavLink></li>
            <li><NavLink to={'/shop'} activeClassName={style.active}>Shop</NavLink></li>
            <li><NavLink to={'/info'}  activeClassName={style.active}>Info</NavLink></li>
            <li><NavLink to={'/contacts'} activeClassName={style.active}>Contacts</NavLink></li>
        </ul>
    )
}

export default Nav