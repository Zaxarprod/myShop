import React from "react"
import style from './Info.module.scss'
import HomeBlock_2 from "../../components/HomeBlock/HomeBlock_2";
import {Parallax} from "react-parallax";
import InfoBlock_1 from "../../components/InfoBlocks/InfoBlock_1";
import InfoBlock_2 from "../../components/InfoBlocks/InfoBlock_2";
import InfoBlock_3 from "../../components/InfoBlocks/InfoBlock_3";

const Info = () => {
    return (
        <div className={style.info}>
            <Parallax
                bgImage={'http://winallos.com/uploads/posts/2014-12/1419456448_prodyuser-kane-uest-kanye-west-reper.jpg'}
                bgImageStyle={{position:'absolute', top: '59%'}}
                strength={900}
                renderLayer={percentage => {
                    console.log(percentage)
                    return (<h3
                        style={{
                            position: 'absolute',
                            background:'white',
                            margin:0,
                            padding: '2vw',
                            paddingLeft:'3vw',
                            paddingRight:'3vw',
                            color: '#908a8a',
                            left: '5%',
                            top: '37%',
                            fontSize: `${percentage * 16}vw`,
                        }}
                    >КАРТА</h3>)
                }}
            >
                <InfoBlock_1 />
            </Parallax>
            <Parallax
                bgImage={'https://img1.goodfon.com/wallpaper/nbig/b/48/50-cent-g-unit-gangsta.jpg'}
                bgImageStyle={{position:'absolute', top: '59%', left: '60%'}}
                strength={900}
                renderLayer={percentage => {
                    console.log(percentage)
                    return (<h3
                        style={{
                            position: 'absolute',
                            background:'white',
                            margin:0,
                            padding: '2vw',
                            paddingLeft:'3vw',
                            paddingRight:'3vw',
                            color: '#908a8a',
                            right: '5%',
                            top: '37%',
                            fontSize: `${percentage * 16}vw`,
                        }}
                    >Скидка</h3>)
                }}
            >
                <InfoBlock_2 />
            </Parallax>
            <Parallax
                bgImage={'http://winallos.com/uploads/posts/2014-12/1419456448_prodyuser-kane-uest-kanye-west-reper.jpg'}
                bgImageStyle={{position:'absolute', top: '59%'}}
                strength={900}
                renderLayer={percentage => {
                    console.log(percentage)
                    return (<h3
                        style={{
                            position: 'absolute',
                            background:'white',
                            margin:0,
                            padding: '2vw',
                            paddingLeft:'3vw',
                            paddingRight:'3vw',
                            color: '#908a8a',
                            left: '5%',
                            top: '37%',
                            fontSize: `${percentage * 16}vw`,
                        }}
                    >Размеры</h3>)
                }}
            >
                <InfoBlock_3 />
            </Parallax>
        </div>
    )
}

export default Info