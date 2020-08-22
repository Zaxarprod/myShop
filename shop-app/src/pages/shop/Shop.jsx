import React from "react"
import style from './Shop.module.scss'
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import GoodsBlock from "../../components/GoodsBlock/GoodsBlock";
import ShowFiltersBlock from "../../components/ShowFiltersBlock/ShowFiltersBlock";

const Shop = () => {
    return (
        <div className={style.shop}>
            <FilterBlock />
            <div className={style.wrapperGoodsBlock}>
                <ShowFiltersBlock />
                <GoodsBlock />
            </div>
        </div>
    )
}

export default Shop