import React, {Fragment, useState} from "react"
import style from './Good.module.scss'
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";

const Good = () => {
    const [translateX, setTranslateX] = useState(0)
    let nextPhoto = () => {
        if(translateX !== -70){
            setTranslateX(translateX - 35)
        }
    }
    let prevPhoto = () => {
        if(translateX){
            setTranslateX(translateX + 35)
        }
    }
    return (
        <div>
            <div className={style.photoBlock}>
                <div className={style.arrowsBlock}>
                    <LeftOutlined onClick={prevPhoto} />
                    <RightOutlined onClick={nextPhoto} />
                </div>
                <div style={{transform: `translateX(${translateX}vw)`, transition: 'all 200ms linear'}}>
                    <img src={''}/>
                    <img src={''}/>
                    <img src={''}/>
                </div>
                <h3>Название товара</h3>
            </div>
        </div>
    )
}

export default Good