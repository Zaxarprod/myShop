import React from "react"
import style from './ShowFiltersBlock.module.scss'
import connect from "react-redux/lib/connect/connect";
import {delFilterTC} from "../../redux/filter-reducer";

const ShowFiltersBlock = ({filters,delFilterTC}) => {
    return (
        <div className={style.showFiltersBlock}>
            <ul className={style.filtersList}>
                {filters.map((filter)=>{
                    return (
                        <li>
                            {filter}
                            <p onClick={()=>{
                                debugger
                                delFilterTC(filter)
                            }}>
                                &times;
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const ShowFilersBlockContainer = (props) => {
    return (
        <ShowFiltersBlock
            filters={props.filters}
            delFilterTC={props.delFilterTC}
        />
    )
}

let mapStateToProps = (state) => ({
    filters: state.filter.filters,
})

export default connect(mapStateToProps,{delFilterTC,})(ShowFilersBlockContainer)