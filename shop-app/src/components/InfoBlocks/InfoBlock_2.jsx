import React from "react"
import style from './InfoBlock.module.scss'
import {NavLink} from "react-router-dom";

const InfoBlock_2 = () => {
    return (
        <div className={style.infoBlock}>
            <div className={style.infoBlock_2_Content}>
                <h2>
                    Заголовок
                </h2>
                <p>
                    Информация о карте. Здесь может быть<br/>
                    абсолютно любая информация. Главное - <br/>
                    это заинтересовать посетителя сайта.
                </p>
                <input type={'text'}/>
                <button>Отправить</button>
            </div>
        </div>
    )
}

export default InfoBlock_2