import React from 'react'
import './App.scss'
import {Route} from 'react-router-dom'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Header from "./components/Header/Header"
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="container">
      <Row>
        <Col span={24}>
            <Header />
        </Col>
      </Row>
        <Row>
            <Col span={24}>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/shop'} exact component={Home}/>
                <Route path={'/info'} exact component={Home}/>
                <Route path={'/contacts'} exact component={Home}/>
            </Col>
        </Row>
    </div>
  )
}

export default App;
