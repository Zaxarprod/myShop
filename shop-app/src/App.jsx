import React, {useState} from 'react'
import './App.scss'
import {Route} from 'react-router-dom'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Header from "./components/Header/Header"
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/shop/Shop";

const App = () => {
    let [opacityHeader, setOpacityHeader] = useState(1)
    return (
        <div className="container" onWheel={(e)=>{
            if(e.deltaY>0){
                setOpacityHeader(-70)
            }else{
                setOpacityHeader(-1)
            }
        }}>
            <Row>
                <Col span={24}>
                    <Header styles={{
                        transform: `translateY(${opacityHeader}px)`,
                        transition: 'all 500ms ease-out',
                    }}/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/shop'} component={Shop}/>
                    <Route path={'/info'} exact component={Home}/>
                    <Route path={'/contacts'} exact component={Home}/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Footer />
                </Col>
            </Row>
        </div>
    )
}

export default App;
