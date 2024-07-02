import MultyCarousel from '../MultyCarousel/MultyCarousel'

import './Footer.css'
import './place/PlaceFooter.css'

import { dataFooter } from './dataFooter'
import PFooter from './pFrooter'
import logo from '/logo-name.svg'
import mapImg from './place/map.svg'


import FooterDiv from './FooterDiv'
import PolicyTextFooter from './PolicyTextFooter'

export default function Footer(){
    return(
        <footer>
            <div className='carouselFooter'>
                <MultyCarousel type='footer' displayElement3={true}></MultyCarousel>
            </div>

            <div className='FooterDiv1'>
                <div style={{width:'29%'}}>
                    <img src={logo} width='100%' style={{marginBottom:'5%'}}></img>
                    {dataFooter.map((data) => {
                        return <a href={`#${data.link}`} className='aFooter' key={data.text}><PFooter isTopHr={data.topHr} key={data.text}>{data.text}</PFooter></a>
                    })}
                    <hr/>
                </div>

                <div style={{width:'65%'}}> 
                    <div className='pictureDivs'>
                        <FooterDiv style={{width:'48%'}} text1='ТЕЛЕФОН' valueText1='+7 (495) 133-02-43' text2='СЛЕДУЙТЕ ЗА НАМИ' 
                            contentDiv1={true} text3='НАШ АДРЕС'></FooterDiv>
                        <FooterDiv style={{width:'52%'}} text1='ПОЧТА' valueText1='info@anviovr.com' text2='ПОЛУЧАЙТЕ ПЕРВЫМ ИНФОРМАЦИЮ О НАШИХ АКЦИЯХ' 
                            contentDiv1={false} text3='ОСТАВЬТЕ ЗАЯВКУ ПРЯМО СЕЙЧАС!'></FooterDiv>
                    </div>
                    
                    <img src={mapImg} width='100%'></img>
                </div>

            </div>

            <div className='FooterDiv2'>
                <PolicyTextFooter >© 2017-2022 ANVIO LLC</PolicyTextFooter>
                <div className='FooterDiv2Polit'>
                    <PolicyTextFooter>Политика конфиденциальности</PolicyTextFooter>
                    <PolicyTextFooter>Политика использования файлов cookie</PolicyTextFooter>
                    <PolicyTextFooter>Общие правила оказания услуг</PolicyTextFooter>
                </div>
                <PolicyTextFooter>ADVCREATIVE</PolicyTextFooter>
            </div>
        </footer>
    )
}