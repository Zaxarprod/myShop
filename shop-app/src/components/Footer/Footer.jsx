import React from 'react'
import style from './Footer.module.scss'
import connect from "react-redux/lib/connect/connect";
import {NavLink} from "react-router-dom";

const Footer = ({footer}) => {
    return (
        <div className={style.footer}>
            <ul className={style.footerList}>
                <li> Магазин
                    <ul>
                        {
                            footer.shop.map((el)=>{
                                return (<li><NavLink to={'/'}>{el}</NavLink></li>)
                            })
                        }
                    </ul>
                </li>
                <li> Информация
                    <ul>
                        {
                            footer.info.map((el)=>{
                                return (<li><NavLink to={'/'}>{el}</NavLink></li>)
                            })
                        }
                    </ul>
                </li>
                <li> Контакты
                    <ul>
                        {
                            footer.contacts.map((el)=>{
                                return (<li><NavLink to={el.src}>{el.name}</NavLink></li>)
                            })
                        }
                    </ul>
                </li>
            </ul>
            <NavLink to={'/'} className={style.footerImage}>
                <img src={''}/>
            </NavLink>
        </div>
    )
}

class FooterContainer extends React.Component {
    render() {
        return <Footer
            footer={this.props.footer}
        />
    }
}

let mapStateToProps = (state) => ({
    footer: state.footer,
})


export default connect(mapStateToProps,{})(FooterContainer)