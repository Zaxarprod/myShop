import React from "react"
import style from './Contacts.module.scss'
import ContactsBlock_1 from "../../components/ContactsBlock/ContactsBlock_1";
import InfoBlock_1 from "../../components/InfoBlocks/InfoBlock_1";
import {Parallax} from "react-parallax";

const Contacts = () => {
    return (
        <div className={style.contactsPage}>
            <Parallax
                bgImage={'https://c.wallhere.com/photos/ed/4c/car_North_America_landscape-58353.jpg!d'}
                bgImageStyle={{position:'absolute', top: '59%'}}
                strength={900}
                renderLayer={percentage => {
                    console.log(percentage)
                    return (<iframe
                        style={{
                            position: 'absolute',
                            background:'white',
                            padding: '2vw',
                            margin:0,
                            left: '5%',
                            top: '37%',
                            width: `${percentage * 65}vw`,
                            height: `${percentage * 35}vw`,
                        }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4769.222634709285!2d34.30940152724157!3d53.29649731987425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4132a81bf4adb4b5%3A0xba63dd820a01b32d!2z0LzQuNC60YDQvtGA0LDQudC-0L0g0JzQvtGB0LrQvtCy0YHQutC40LksINCR0YDRj9C90YHQuiwg0JHRgNGP0L3RgdC60LDRjyDQvtCx0LsuLCAyNDEwMzU!5e0!3m2!1sru!2sru!4v1598357404316!5m2!1sru!2sru"
                        frameBorder="0" allowFullScreen=""
                        aria-hidden="false" tabIndex="0">
                    </iframe>)
                }}
            >
                <ContactsBlock_1 />
            </Parallax>
        </div>
    )
}

export default Contacts