import React, {createRef, Fragment, useEffect, useState} from "react"
import style from './GoodsBlock.module.scss'
import PreviewCart from "../PreviewCart/PreviewCart";
import connect from "react-redux/lib/connect/connect";

const ControlQuantityImages = ({shareNumber, setShareNumber}) => {
    let arr = [2,3,4]
    return (
        <div className={style.controlBlock}>
            <ul>
                {arr.map((el)=>{
                    return (
                        <li onClick={()=>{
                            setShareNumber(el)
                        }}
                        className={(el===shareNumber)?style.border:''}>{el}</li>
                    )
                })}
            </ul>
        </div>
    )
}

const GoodsBlock = ({goods}) => {
    const [shareNumber, setShareNumber] = useState(3)
    return (
        <Fragment>
            <ControlQuantityImages
                setShareNumber={setShareNumber}
                shareNumber={shareNumber}
            />
            <div className={style.goodsBlock}>
                {goods.map((element)=>{
                    return (
                        <PreviewCart
                            previewCart={element}
                            width={100}
                            shareNumber={shareNumber}
                        />)
                })}
            </div>
        </Fragment>
    )
}

class GoodsBlockContainer extends React.Component{
    render(){
        return (
            <GoodsBlock
                goods={this.props.goods}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    goods: state.shop.goods,
})

export default connect(mapStateToProps,{})(GoodsBlockContainer)