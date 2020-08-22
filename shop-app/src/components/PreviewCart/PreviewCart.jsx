import React from 'react'
import style from './PreviewCart.module.scss'
import {NavLink} from "react-router-dom";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";

const PreviewCart = ({previewCart}) => {
    return (
        <NavLink className={style.previewCart} to={'/'}>
            <div className={style.photoBlock}>
                <img src={previewCart.img[0]} className={style.firstPhoto} />
                <img src={previewCart.img[1]} className={style.secondPhoto}/>
            </div>
            <div className={style.nameBlock}>
                <p>{previewCart.name}</p>
                <NavLink to={'/'}>
                    <ShoppingCartOutlined />
                </NavLink>
            </div>
            <div className={style.priceBlock}>
                <p>{previewCart.price}</p>
                <ul>
                    {previewCart.colors.map((el)=>{
                        return (<li style={{background:el}}></li>)
                    })}
                </ul>
            </div>
        </NavLink>
    )
}

export default PreviewCart