import React, {createRef} from "react"
import style from './GoodsPage.module.scss'
import connect from "react-redux/lib/connect/connect"
import { Slide } from 'react-slideshow-image'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import {NavLink} from "react-router-dom";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";
import ShoppingOutlined from "@ant-design/icons/lib/icons/ShoppingOutlined";
import {Parallax} from "react-parallax";

const GoodsPage = ({selectedGood}) => {
    const images = selectedGood.img

    const zoomInProperties = {
        indicators: false,
        scale: 1.4,
        arrows: false,
    }
    const slideRef = createRef()
    return (
        <div className={style.goodsPage}>
            <div className={style.block_1}>
                <div className={style.good}>
                    <Zoom {...zoomInProperties} style={{width: "100%", height:'calc(100vh - 70px - 7vh)'}}
                        ref={slideRef}
                    >
                        {images.map((each, index) => (
                            <>
                            <div key={index}
                                 style={{width: "100%", height:'calc(100vh - 70px - 7vh)'}}
                                 className={style.photoBlock}
                            >
                                <img style={{ height:'calc(100vh - 70px - 7vh)'}} src={each} />
                            </div>
                            </>
                        ))}
                    </Zoom>
                    <div className={style.interfaceBlock}>
                        <div className={style.arrowsBlock}>
                            <div onClick={()=>{
                                slideRef.current.goBack()
                            }}>
                                <LeftOutlined />
                            </div>
                            <div onClick={()=>{
                                slideRef.current.goNext()
                            }}>
                                <RightOutlined />
                            </div>
                        </div>
                        <div className={style.buyBlock}>
                            <NavLink to={''}>
                                <ShoppingCartOutlined />
                            </NavLink>
                            <NavLink to={''}>
                                <ShoppingOutlined />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Parallax
                    bgImage={'https://i.pinimg.com/originals/19/7b/10/197b10e0dd62d4ce6cc5b1a4a91743c2.jpg'}
                    bgImageAlt=""
                    strength={600}
                    blur={3}
                >
                    <div className={style.goodInfoBlock}>
                        <h1 className={style.header}>{selectedGood.name}</h1>
                        <p className={style.price}>{selectedGood.price}</p>
                    </div>
                </Parallax>
            </div>

        </div>
    )
}

class goodsPageContainer extends React.Component{
    render(){
        return (
            <GoodsPage
                selectedGood={this.props.selectedGood}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    selectedGood: state.shop.selectedGood,
})

export default connect(mapStateToProps,{})(goodsPageContainer)