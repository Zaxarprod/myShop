import React from "react"
import { Carousel } from 'antd'
import style from './../HomeBlock.module.scss'
import Good from "./Good/Good";
import connect from "react-redux/lib/connect/connect";


const CarouselHomeBlock = ({popularGoods}) => {
    return (
        <Carousel autoplay className={style.carousel} dotPosition={'right'}>
            {
                popularGoods.map((good)=>{
                    return <Good good={good} />
                })
            }
        </Carousel>
    )
}

const CarouselHomeBlockContainer = (props) => {
    return (
        <CarouselHomeBlock
            popularGoods={props.popularGoods}
        />
    )
}

let mapStateToProps = (state) => ({
    popularGoods: state.home.popularGoods,
})

export default connect(mapStateToProps,{})(CarouselHomeBlockContainer)