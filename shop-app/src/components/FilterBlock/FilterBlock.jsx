import React, {useState} from "react"
import style from './FilterBlock.module.scss'
import connect from "react-redux/lib/connect/connect";
import {addFilterTC} from "../../redux/filter-reducer";

const FilterBlock = ({categories,addFilterTC}) => {
    const [isOpen, setIsOpen] = useState(true)
    const [indexIsOpen, setIndexIsOpen] = useState(0)
    return (
        <div className={style.filterBlock}>
            <ul className={style.filterList}>
            {categories.map((el, i)=>{
                return (
                        <li className={style.filterCat}
                            onClick={()=>{
                                setIsOpen((i===indexIsOpen)?!isOpen:true)
                                setIndexIsOpen(i)
                            }}>{el.name}
                            {(i===indexIsOpen) && isOpen && (<ul>
                                {el.values.map((val)=>{
                                        return (<li onClick={()=>{
                                            addFilterTC(val)
                                            debugger
                                        }}>{val}</li>)
                                    })}
                            </ul>)}
                        </li>
                )
            })}
            </ul>
        </div>
    )
}

const FilterBlockContainer = (props) => {
    return (
        <FilterBlock
            categories={props.categories}
            addFilterTC={props.addFilterTC}
        />
    )
}

let mapStateToProps = (state) => ({
    categories: state.filter.categories,
})

export default connect(mapStateToProps,{addFilterTC,})(FilterBlockContainer)