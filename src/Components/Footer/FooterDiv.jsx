import './Footer.css'
import PFooter from './pFrooter'
import './place/PlaceFooter.css'

import { socialImg } from './dataFooter'
import SocialMedia from './SocialMedia'

import place1 from './place/place1.svg'
import place2 from './place/place2.svg'
import PlaceFooter from './place/PlaceFooter'
import Button from '../Buttons/Button'
import FormFooter from './FormFooter/FormFooter'

export default function FooterDiv({... props}){
    return(
        <div style={props.style}>
            <PFooter>{props.text1}</PFooter>
            <h4 className='telephoneFooter'>{props.valueText1}</h4>

            <PFooter>{props.text2}</PFooter>
            {props.contentDiv1 ?
                socialImg.map((social) => {
                    return <SocialMedia img={social.img} key={social.img}></SocialMedia>
                }) : <FormFooter></FormFooter>}

            <PFooter style={{marginTop:'13%'}}>{props.text3}</PFooter>
            {props.contentDiv1 ? <>
                <h5 style={{fontWeight:'400'}}>Москва, Театральный пр-д 5/1, Центральный Детский Магазин</h5>

                <div className='placeFooterDiv'>
                    <PlaceFooter img={place1} width='17%'>Лубянка — 200м</PlaceFooter>
                    <PlaceFooter img={place2} width='13.5%'>Кузнецкий мост — 120м</PlaceFooter>
                </div></> : <>
                                <Button className='FooterButton FooterButtonByeTicket'>КУПИТЬ БИЛЕТ</Button>
                                <Button className='FooterButton FooterButtonBrone'>ЗАКАЗАТЬ ПРАЗДНИК</Button>
                            </>}
        </div>
    )
}