import React from "react"
import style from './InfoBlock.module.scss'
import {NavLink} from "react-router-dom";

const InfoBlock_1 = () => {
    return (
        <div className={style.infoBlock_1}>
            <div className={style.infoBlock_1_Content}>
                <h2>
                    Заголовок
                </h2>
                <p>
                    Информация о карте. Здесь может быть<br/>
                    абсолютно любая информация. Главное - <br/>
                    это заинтересовать посетителя сайта.
                </p>
                <NavLink to={''}>Подробнее...</NavLink>
            </div>
        </div>
    )
}

export default InfoBlock_1