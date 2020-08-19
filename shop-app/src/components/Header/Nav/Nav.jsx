import React from "react"
import style from './../Header.module.scss'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <ul className={style.nav}>
            <li><NavLink to={'/'} exact activeClassName={style.active}>Home</NavLink></li>
            <li><NavLink to={'/shop'} exact activeClassName={style.active}>Shop</NavLink></li>
            <li><NavLink to={'/info'} exact activeClassName={style.active}>Info</NavLink></li>
            <li><NavLink to={'/contacts'} exact activeClassName={style.active}>Contacts</NavLink></li>
        </ul>
    )
}

export default Nav