import Button from '../../Buttons/Button'
import CarouselEvent from './CarouselEvent/CarouselEvent'
import './Event.css'
import vect from './vect.svg'

export default function Event({pictLeft, pictRight, children, text, nameButton, vectorOrButton, link1, link2, link3, isSertificat,... props}){
    return(
        <div className="eventDiv">
            <img src={pictLeft} width={props.width1}></img>
            
            <div style={{maxWidth:'27%'}}>
                <h2 className="eventTitle">{children}</h2>
                <p className='eventText'>{text}</p>
                <Button className='eventButton'>{nameButton}</Button>
                { vectorOrButton ? <><img src={vect} className='vectEvent'></img><br/></> : <><Button className='buttonDetailEvent'>ПОДРОБНЕЕ</Button><br/></>}
                <a href='#' className='infoEvent'>{link1}</a>
                <a href='#' className='infoEvent'>{link2}</a>
                <a href='#' className='infoEvent'>{link3}</a>
            </div>
            
            <CarouselEvent isSertificat={isSertificat}></CarouselEvent>

            <img src={pictRight} width={props.width2}></img>
        </div>
    )
}