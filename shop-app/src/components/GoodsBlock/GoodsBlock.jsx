import React from "react"
import style from './GoodsBlock.module.scss'
import PreviewCart from "../PreviewCart/PreviewCart";
import connect from "react-redux/lib/connect/connect";

const GoodsBlock = ({goods}) => {
    return (
        <div className={style.goodsBlock}>
            {goods.map((element)=>{
                return (<PreviewCart previewCart={element}/>)
            })}
        </div>
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