import React, {useState} from "react"
import style from './../../pages/shop/Shop.module.scss'
import Cascader from "antd/es/cascader";
import connect from "react-redux/lib/connect/connect";
import {setAdditFilterTC} from "../../redux/filter-reducer";
import {setTranslateTC} from "../../redux/app-reducer";

const AdditFilters = ({translate, setAdditFilter}) => {
    const options = [
        {
            value: 'По возрастанию цены',
            label: 'По возрастанию цены',
        },
        {
            value: 'По убыванию цены',
            label: 'По убыванию цены',
        },
    ];
    let onChange = (value) => {
        debugger
        setAdditFilter(value)
    }
    return (
        <div
             style={{
                transform: `translateY(${translate}px)`,
                transition: 'all 500ms ease-out',
                }}
             className={style.additFilters}
        >
            <Cascader
                options={options}
                placeholder={'Сортировать по'}
                className={style.selectForm}
                onChange={onChange}
            />
        </div>
    )
}

class AdditFiltersContainer extends React.Component{
    render(){
        return <AdditFilters
            setAdditFilter = {this.props.setAdditFilterTC}
            translate={this.props.translate}
        />
    }
}

let mapStateToProps = (state) => ({
    translate: state.app.translate,
})

export default connect(mapStateToProps,{setAdditFilterTC,})(AdditFiltersContainer);
