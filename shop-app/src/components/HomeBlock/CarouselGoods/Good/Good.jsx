import React, {Fragment, useState} from "react"
import style from './Good.module.scss'
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import ShoppingOutlined from "@ant-design/icons/lib/icons/ShoppingOutlined";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";

const Good = ({good}) => {
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
        <div className={style.mainWrapper}>
            <div className={style.photoBlock}>
                <div className={style.arrowsBlock}>
                    <LeftOutlined onClick={prevPhoto} />
                    <RightOutlined onClick={nextPhoto} />
                </div>
                <div style={{transform: `translateX(${translateX}vw)`, transition: 'all 200ms linear'}}
                    className={style.photos}>
                    {
                        good.img.map((image)=>{
                            return <img src={image}/>
                        })
                    }
                </div>
                <h3>{good.name}</h3>
            </div>
            <div className={style.interfaceBlock}>
                <div className={style.price}>
                    <h3>{good.price}</h3>
                </div>
                <div className={style.buy}>
                    <ShoppingOutlined />
                </div>
                <div className={style.cart}>
                    <ShoppingCartOutlined />
                </div>
            </div>
        </div>
    )
}

export default Good