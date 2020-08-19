import React from "react"
import style from './../HomeBlock.module.scss'
import {NavLink} from "react-router-dom";

const InfoHomeBlock = () => {
    return (
        <div className={style.infoHomeBlock}>
            <div>
                <h1>CТАНЬ ЧАСТЬЮ <br/>
                    НАШЕЙ КОМАНДЫ!
                </h1>
                <p>
                    Абсолютно любой текст, описывающий <br />
                    всё, что угодно. Главное - это заинтересовать <br />
                    посетителя сайта.
                </p>
                <div className={style.buttonInfo}>
                    <NavLink to={'/'} className={style.more}>Подробнее</NavLink>
                    <img src={'https://i.imgur.com/PQoz6xH.jpg'}/>
                </div>
            </div>
        </div>
    )
}

export default InfoHomeBlock