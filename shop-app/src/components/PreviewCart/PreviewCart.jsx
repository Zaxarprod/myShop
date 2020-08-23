import React, {createRef, useState} from 'react'
import style from './PreviewCart.module.scss'
import {NavLink} from "react-router-dom";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";

class PreviewCart extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            width: this.props.width,
        }
    }


    render() {
        console.log(this.state.width)
        return (
            <NavLink className={style.previewCart} to={'/' }
                     style={{width: `${this.props.width/this.props.shareNumber}%`}}>
                <div className={style.photoBlock} ref={this.myRef}>
                    <img src={this.props.previewCart.img[0]}
                         className={style.firstPhoto}
                         style={{height: `calc(70vw * ${1/this.props.shareNumber} * 0.95 * 1.4`}}
                    />
                    <img src={this.props.previewCart.img[1]}
                         className={style.secondPhoto}
                         style={{height: `calc(70vw * ${1/this.props.shareNumber} * 0.95 * 1.4`}}
                    />
                    <ul>
                        {this.props.previewCart.sizes.map((el) => {
                            return (<li>{el}</li>)
                        })}
                    </ul>
                </div>
                <div className={style.nameBlock}>
                    <p>{this.props.previewCart.name}</p>
                    <NavLink to={'/'}>
                        <ShoppingCartOutlined/>
                    </NavLink>
                </div>
                <div className={style.priceBlock}>
                    <p>{this.props.previewCart.price}</p>
                    <ul>
                        {this.props.previewCart.colors.map((el) => {
                            return (<li style={{background: el}}></li>)
                        })}
                    </ul>
                </div>
            </NavLink>
        )
    }
}

export default PreviewCart