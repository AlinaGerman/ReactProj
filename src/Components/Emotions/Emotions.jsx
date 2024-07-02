import './Emotions.css'
import '../Str2/Emotions2/Emotions2.css'
import point from '../MultyCarousel/point.svg'
import EmotionsCarouselMulty from './CarouselEmotions/CarouselEmotions'
import Button from '../Buttons/Button'

export default function Emotions({str1, children, buttonName}){
    return(
        <div className='allDiv' style={{marginBottom:'5%'}}>
            <div className={str1 ? 'EmotionsDiv' : 'EmotionsDiv Emotions2Div'}>
                <h1 className={str1 ? 'title EmotionsTitle' : 'title EmotionsTitle Emotions2Title'}>{children}</h1>
                <Button buyTicketButton={true} className="buyTicket" id='ticketToPark'>{buttonName}</Button>
                
            </div>
            <div className='emotionsCarousel'>
                <EmotionsCarouselMulty></EmotionsCarouselMulty>
            </div>
            
            <img src={point} width='3%' className='StarPeoplePoint'></img>
        </div>
    )
}