import React from "react"
import style from './Home.module.scss'
import HomeBlock_1 from "../../components/HomeBlock/HomeBlock_1";
import HomeBlock_2 from "../../components/HomeBlock/HomeBlock_2";

const Home = () => {
    return (
        <div>
            <HomeBlock_1 />
            <HomeBlock_2 />
        </div>
    )
}

export default Home
