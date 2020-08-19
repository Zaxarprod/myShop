import React from "react"
import style from "../../pages/home/Home.module.scss";
import {NavLink} from "react-router-dom";

const HomeBlock_2 = () => {
    return (
        <div className={style.homeBlock_2}>
            <div className={style.mainInfo}>
                <h1 className={style.mainHeader}>
                    НОВАЯ<br/>
                    КОЛЛЕКЦИЯ
                </h1>
            </div>
            <div className={style.productBlock}>
                <ul className={style.collectionGoods}>
                    <NavLink to={'/'}>
                    <li>
                        <img src={'https://i.pinimg.com/736x/10/4b/8a/104b8ad405180d8b8f7d122f0e7b2485.jpg'}/>
                        <p>Купить</p>
                    </li>
                    </NavLink>
                    <NavLink to={'/'}>
                    <li>
                        <img src={'https://www.usmagazine.com/wp-content/uploads/2019/10/Travis-Scott-releases-new-music-post-Kylie-split.jpg'}/>
                        <p>Купить</p>
                    </li>
                    </NavLink>
                    <NavLink to={'/'}>
                    <li>
                        <img src={'https://yt3.ggpht.com/a/AATXAJxGJBUCu0T_TEZDqDK1Q7XXlU27cOaON8Fgv5S5RFI=s900-c-k-c0xffffffff-no-rj-mo'}/>
                        <p>Купить</p>
                    </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default HomeBlock_2