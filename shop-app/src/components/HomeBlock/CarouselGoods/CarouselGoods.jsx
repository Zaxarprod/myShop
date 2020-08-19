import React from "react"
import { Carousel } from 'antd'
import style from './../HomeBlock.module.scss'
import Good from "./Good/Good";


const CarouselHomeBlock = () => {
    return (
        <Carousel autoplay className={style.carousel} dotPosition={'right'}>
                <Good />
                <Good />
                <Good />
                <Good />
        </Carousel>
    )
}

export default CarouselHomeBlock