import React, {createRef} from "react"
import style from "../../pages/home/Home.module.scss";
import InfoHomeBlock from "./InfoHomeBlock/InfoHomeBlock";
import {Carousel} from "antd";
import CarouselGoods from "./CarouselGoods/CarouselGoods";

const HomeBlock_1 = () => {
    let scrollBlock = createRef()
    let handleScroll = (e) => {
        if(e.deltaY>0){
            window.scrollTo({
                top: window.innerHeight + 1,
                behavior: "smooth",
            })
        }
        /**/
        else{
            window.scrollTo({
                top: -(window.innerHeight + 1),
                behavior: "smooth"
            })
        }
    }
    return (
        <div className={style.homeBlock_1}
             onWheel={handleScroll}
             ref={scrollBlock} >
            <InfoHomeBlock />
            <CarouselGoods />
        </div>
    )
}

export default HomeBlock_1