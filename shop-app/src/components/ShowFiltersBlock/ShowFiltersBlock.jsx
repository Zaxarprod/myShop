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

class ShowFilersBlockContainer extends React.Component {
    render() {
        return (
            <ShowFiltersBlock
                filters={this.props.filters}
                delFilterTC={this.props.delFilterTC}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    filters: state.filter.filters,
})

export default connect(mapStateToProps,{delFilterTC,})(ShowFilersBlockContainer)