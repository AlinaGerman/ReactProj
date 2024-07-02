import StartDiv from "./StartDiv/StartDiv"
import Reasons from "./Reasons/Reasons.jsx"
import Info from "./Info/Info.jsx"
import Entertaiment from "./Entertaiment/Entertaiment.jsx"
import Events from "./Events/Events.jsx"
import Emotions from "./Emotions/Emotions.jsx"
import Questions from "./Questions/Questions.jsx"
import MulCarouselDiv from "./MultyCarousel/MulCarouselDiv.jsx"

import { dataStarPeople } from "./MultyCarousel/dataStarPeople";


export default function Str1(){
    return(
        <>
            {/*<StartDiv str1={true} style={{marginBottom:'10%'}}></StartDiv>
        <Reasons></Reasons>
        <Info></Info>
        <Entertaiment></Entertaiment>*/}
        <Emotions str1={true} buttonName='КУПИТЬ БИЛЕТ В ПАРК'>Неподдельные эмоции наших гостей</Emotions>
        <Events></Events>
        <MulCarouselDiv type='StarPeople' style={{marginBottom:'1%'}} buttonClass='buyTicket' buyTicketButton={true}
            id='ticketToPark' buttonName='КУПИТЬ БИЛЕТ В ПАРК' displayElement4={true} dataComp={dataStarPeople} widthImg='100%'>Впечатления звёздных гостей</MulCarouselDiv>
        <MulCarouselDiv type='Comments' style={{marginBottom:'5%'}}>Отзывы</MulCarouselDiv>
        <MulCarouselDiv type='Sales' buttonClass='allSales' buttonName='ВСЕ АКЦИИ' style={{marginBottom:'5%'}} id='sales'>Акции</MulCarouselDiv>
        <Questions></Questions>
        <MulCarouselDiv type='News'  buttonClass='allSales' buttonName='ВСЕ НОВОСТИ' style={{marginBottom:'5%'}}>Новости</MulCarouselDiv>
        </>
    )
}
