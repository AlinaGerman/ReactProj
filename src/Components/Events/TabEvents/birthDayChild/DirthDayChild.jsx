import Event from '../Event'
import left from './left.svg'
import right from './right.svg'

export default function BirthDayChild(){
    return(
        <Event pictLeft={left} width1='13%' pictRight={right} width2='12%' nameButton='РАССЧИТАТЬ СТОИМОСТЬ' vectorOrButton={true} link1='Как организовать?' link2='Сколько стоит?' link3='А чем кормят?' text='В нашем парке можно устроить праздник, который не забудется ни имененниками, ни их гостями.'>Подарите ребёнку лучший и самый незабываемый день рождения!</Event>
    )
}
{/*<div className="eventDiv">
            <img src={ballL} className='eventImg'></img>
            <div style={{maxWidth:'27%'}}>
                <h2 className="eventTitle">Подарите ребёнку лучший и самый незабываемый день рождения!</h2>
                <p className='eventText'>В нашем парке можно устроить праздник, который не забудется ни имененниками, ни их гостями.</p>
                <button className='eventButton'>РАССЧИТАТЬ СТОИМОСТЬ</button>
                <img src={vect} className='vectEvent'></img><br/>
                <a href='#' className='infoEvent'>Как организовать?</a>
                <a href='#' className='infoEvent'>Сколько стоит?</a>
                <a href='#' className='infoEvent'>А чем кормят?</a>
            </div>
            
            <CarouselEvent></CarouselEvent>

            
            <img src={ballR} className='eventImg'></img>
        </div>*/}