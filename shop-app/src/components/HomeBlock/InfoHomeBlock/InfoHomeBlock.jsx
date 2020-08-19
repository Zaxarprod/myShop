import React from "react"
import style from './../HomeBlock.module.scss'

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
                </div>
            </div>
        </div>
    )
}

export default InfoHomeBlock