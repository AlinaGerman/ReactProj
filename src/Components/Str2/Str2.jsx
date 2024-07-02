import '../Entertaiment/ContentEntert/Arena/Arena.css'
import '../Entertaiment/ContentEntert/ContentEntert.css'
import './Str2.css'

import StartDiv from "../StartDiv/StartDiv";
import Arena from "../Entertaiment/ContentEntert/Arena/Arena";
import Emotions from '../Emotions/Emotions.jsx';
import MulCarouselDiv from '../MultyCarousel/MulCarouselDiv.jsx';

import { dataStarPeople2 } from '../MultyCarousel/dataStarPeople2.js';
import GamesForCompany from './GamesForCompany/GamesForCompany.jsx';

import image1 from './GamesForCompany/rightImg.svg'
import image2 from './GamesForCompany/rightImg2.svg'
import PlusArena2 from './PlusArena2/PlusArena2.jsx';

import fon from './fon.svg'

export default function Str2(){
    return(
        <>
        <StartDiv></StartDiv>
        <img src={fon} className='fonStr2'></img>
        <GamesForCompany img={image1} text='Полное погружение в фантастическую атмосферу, в которой могут принять участие и взрослые и дети.'>
            Игры подойдут для любой компании
        </GamesForCompany>
        <PlusArena2 type1='square' type2='free' type3='command' type4='ganre'></PlusArena2>
        <GamesForCompany img={image2} develop={true} text='Игры создаю наши гейм дизайнеры, и нигде, кроме ANVIO, в них не сыграть. Поучаствуй в спецоперации по спасению Москва-Сити. Зомби и боссы ждут вас! (Игра City Z)'>
            Мы сами разрабатываем игры!
        </GamesForCompany>
        <Arena str2={true}>Наши игры</Arena>
        <MulCarouselDiv type='Comments' style={{marginBottom:'5%'}}>Отзывы</MulCarouselDiv>
        <MulCarouselDiv type='StarPeople' style={{marginBottom:'5%'}} buttonClass='buyTicket' buyTicketButton={true}
            id='ticketToPark' buttonName='КУПИТЬ БИЛЕТ В ПАРК' displayElement4={true} dataComp={dataStarPeople2} widthImg='120%'>Наши гости</MulCarouselDiv>
        <Emotions buttonName='ХОЧУ ТАК ЖЕ'>Посмотрите неподдельные эмоции наших гостей</Emotions>
        <MulCarouselDiv type='Sales' buttonClass='allSales' buttonName='ВСЕ АКЦИИ' style={{marginBottom:'5%'}} id='sales'>Акции</MulCarouselDiv>
        </>
    )
}