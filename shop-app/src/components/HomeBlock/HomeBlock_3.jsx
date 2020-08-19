import React from "react"
import style from "../../pages/home/Home.module.scss";
import {NavLink} from "react-router-dom";

const HomeBlock_3 = () => {
    return (
        <div className={style.homeBlock_3}>
            <div className={style.productBlock_3}>
                    <ul className={style.collectionGoods_3}>
                        <NavLink to={'/'}>
                            <li>
                                <img src={'https://assets.vogue.com/photos/5a5f910d1d955036a491cbbf/master/pass/00-promo-tyler-the-creator.jpg'}/>
                                <p>Летняя коллекция</p>
                            </li>
                        </NavLink>
                        <NavLink to={'/'}>
                            <li>
                                <img src={'https://avatars.yandex.net/get-music-content/33216/dcdfe0a8.p.593298/m1000x1000?webp=false'}/>
                                <p>Летняя коллекция</p>
                            </li>
                        </NavLink>
                    </ul>
            </div>
            <div className={style.mainInfo_3}>
                <h1 className={style.mainHeader_3}>
                    ЧУВСТВУЙ<br/>
                    СТИЛЬ
                </h1>
            </div>
        </div>
    )
}

export default HomeBlock_3