import React, {useEffect, useState} from "react"
import style from './FilterBlock.module.scss'
import connect from "react-redux/lib/connect/connect";
import {addFilterTC, delFilterTC} from "../../redux/filter-reducer";

const FilterBlock = ({categories, filters ,addFilter, delFilter, translate}) => {
    const [isOpen, setIsOpen] = useState(true)
    const [indexIsOpen, setIndexIsOpen] = useState(0)
    return (
        <div className={style.filterBlock}>
            <ul style={{
                    transform: `translateY(${translate}px)`,
                    transition: 'all 500ms ease-out',
                }}
                className={style.filterList}>
            {categories.map((el, i)=>{
                return (
                        <li className={style.filterCat}
                            onClick={()=>{
                                setIsOpen((i===indexIsOpen)?!isOpen:true)
                                setIndexIsOpen(i)
                            }}>{el.name}
                            {(i===indexIsOpen) && isOpen && (<ul>
                                {el.values.map((val)=>{
                                        return (
                                            <li
                                                onClick={()=>{
                                                    if(filters.indexOf(val)===-1){
                                                        addFilter(val)
                                                    }
                                                }}
                                                className={(filters.indexOf(val)!==-1)?style.bold:''}
                                            >
                                                {val}
                                                {(filters.indexOf(val)!==-1) &&
                                                <p onClick={()=>{
                                                    delFilter(val)
                                                }}>
                                                    &times;
                                                </p>
                                                }
                                            </li>)
                                    })}
                            </ul>)}
                        </li>
                )
            })}
            </ul>
        </div>
    )
}

class FilterBlockContainer extends React.Component {
    render() {
        return (
            <FilterBlock
                categories={this.props.categories}
                filters={this.props.filters}
                addFilter={this.props.addFilterTC}
                delFilter={this.props.delFilterTC}
                translate={this.props.translate}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    categories: state.filter.categories,
    filters: state.filter.filters,
    translate: state.app.translate,
})

export default connect(mapStateToProps,{addFilterTC, delFilterTC})(FilterBlockContainer)