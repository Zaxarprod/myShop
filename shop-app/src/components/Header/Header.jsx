import React from 'react'
import style from './Header.module.scss'
import Brand from "./Brand/Brand";
import Nav from "./Nav/Nav";

const Header = () => {
    return (
        <div className={style.Header}>
            <Brand />
            <Nav />
        </div>
    )
}

export default Header