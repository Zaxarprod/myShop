import React, {useState} from 'react'
import './App.scss'
import {Route} from 'react-router-dom'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Header from "./components/Header/Header"
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/shop/Shop";
import connect from "react-redux/lib/connect/connect";
import {setTranslate, setTranslateTC} from "./redux/app-reducer";
import Info from "./pages/info/Info";

const App = ({translate, setTranslate}) => {
    return (
        <div className="container" onWheel={(e)=>{
            if(e.deltaY>0){
                setTranslate(-70)
            }else{
                setTranslate(-1)
            }
        }}>
            <Row>
                <Col span={24}>
                    <Header styles={{
                        transform: `translateY(${translate}px)`,
                        transition: 'all 500ms ease-out',
                    }}/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/shop'} component={Shop}/>
                    <Route path={'/info'} exact component={Info}/>
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


class AppContainer extends React.Component{
    render(){
        return (
            <App
                setTranslate={this.props.setTranslateTC}
                translate={this.props.translate}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    translate: state.app.translate,
})

export default connect(mapStateToProps,{setTranslateTC,})(AppContainer);
