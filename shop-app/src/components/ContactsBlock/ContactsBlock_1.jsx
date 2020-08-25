import React from "react"
import style from './ContactsBlock.module.scss'
import connect from "react-redux/lib/connect/connect";
import {NavLink} from "react-router-dom";

const ContactsBlock_1 = ({sn}) => {
    return (
        <div className={style.contactsBlock}>
            <h1>МЫ</h1>
            <div>
                <p>
                    В соцсетях:<br/>
                    {sn.map((el)=>{
                        return (<><NavLink to={el.src}> - {el.name}</NavLink><br/></>)
                    })}

                </p>
                <p>
                    В вашей записной книжке:<br/>
                    <NavLink to={'/contacts'}>- 8 (888) 888 - 88 - 88</NavLink>
                </p>
            </div>
        </div>
    )
}

class ContactsBlock_1_Container extends React.Component{
    render(){
        return <ContactsBlock_1
            sn={this.props.sn}
        />
    }
}

let mapStateToProps = (state) => ({
    sn: state.footer.contacts,
})

export default connect(mapStateToProps,{})(ContactsBlock_1_Container)