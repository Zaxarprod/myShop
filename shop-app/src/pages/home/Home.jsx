import React from "react"
import style from './Home.module.scss'
import HomeBlock_1 from "../../components/HomeBlock/HomeBlock_1";
import HomeBlock_2 from "../../components/HomeBlock/HomeBlock_2";
import {Parallax} from "react-parallax";
import HomeBlock_3 from "../../components/HomeBlock/HomeBlock_3";

const Home = () => {
    return (
        <div>
            <HomeBlock_1 />
            <Parallax
                blur={{min:0, max:3}}
                bgImage={'https://cdn.news.bandsintown.com/wp-content/uploads/2017/06/TravisHeader.jpg'}
                bgImageAlt=""
                strength={600}
            >
                <HomeBlock_2 />
            </Parallax>
            <Parallax
                blur={{min:0, max:1}}
                bgImage={'https://pbs.twimg.com/media/DxiG1qWX0AIzt9i.jpg'}
                bgImageAlt=""
                strength={300}
            >
                <HomeBlock_3 />
            </Parallax>
        </div>
    )
}

export default Home
