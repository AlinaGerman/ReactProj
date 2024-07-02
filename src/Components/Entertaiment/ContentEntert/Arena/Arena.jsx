import './Arena.css'
import '../ContentEntert.css'
import './games/games2/Games2.css'
import '../../../Str2/OurGames/OurGames.css'


import arena from './arena.png'
import game from './game.svg'
import clock from './clock.svg'
import money from './money.svg'
import InfArena from './infArena'


import Game from './games/Game'

import { useState } from 'react'
import OpenDIalogModal from '../../../DialogModal/OpenDIalogModal'
import CloseButtonDialog from '../../../DialogModal/CloseButtonDialog'
import AboutArenaContent from '../../AboutArena/AboutArenaContent'

import square from '../../AboutArena/square.svg'
import attraction from '../../AboutArena/attraction.svg'
import stend from '../../AboutArena/stend.svg'
import Button from '../../../Buttons/Button'

import OurGameBrone from '../../../Str2/OurGames/OurGameBrone.svg'

export default function Arena({str2, children}){
    const [aboutArena, setAboutArena] = useState(false)

    function openAboutArena(){
        setAboutArena(true)
    }

    const [currentAboutArena, setCurrentAboutArena] = useState ('arena')

    return (
        <div className={str2 ? 'OurGamesMainDiv' : 'mainDivArena'}>
            <div className={str2 ? '' :'ArenaImgTitle'}>
                
                <div>
                    <h2 className={str2 ? " OurGamesTitle" : "content-entert-title"}>{children}</h2>

                    {str2 ? <></> : <><div className='infoArena'>
                                        <InfArena im={game}>2-12</InfArena>
                                        <InfArena im={clock}>40 мин.</InfArena>
                                        <InfArena im={money}>от 500 ₽</InfArena>
                                    </div>

                                    <p className='ArenaHoliday'>В нашем парке можно устроить праздник, который не забудется ни имененниками, ни их гостями.</p>

                                    
                                    <Button className='priceButton' onClick={openAboutArena}>ЦЕНЫ</Button>
                                    <Button className='detailesButton'>ПОДРОБНЕЕ</Button></>}

                    
                    <OpenDIalogModal open={aboutArena} className='aboutArenaDiv'>
                        <div className='gridAboutArena'>
                        <CloseButtonDialog onClick={() => setAboutArena(false)}></CloseButtonDialog>

                        <AboutArenaContent isActive={currentAboutArena=='arena'} 
                            onClick={(currentAboutArena) => setCurrentAboutArena('arena')} 
                            price='5 000 ₽' osobennostImg={square} width1='9%'
                            idAbout='arena'>Арена
                        </AboutArenaContent>
                        <AboutArenaContent isActive={currentAboutArena=='kub'} 
                            onClick={(currentAboutArena) => setCurrentAboutArena('kub')} 
                            price='500 ₽' osobennostImg={square} width1='9%'
                            idAbout='kub'>Куб
                        </AboutArenaContent>
                        <AboutArenaContent isActive={currentAboutArena=='attraction'} 
                            onClick={(currentAboutArena) => setCurrentAboutArena('attraction')} 
                            price='500 ₽' osobennostImg={attraction} width1='11%'
                            idAbout='attraction'>Аттракционы
                        </AboutArenaContent>
                        <AboutArenaContent isActive={currentAboutArena=='stend'} 
                            onClick={(currentAboutArena) => setCurrentAboutArena('stend')} 
                            price='500 ₽' osobennostImg={stend} width1='9%'
                            idAbout='stend'>Стенды
                        </AboutArenaContent>  </div>              
                    </OpenDIalogModal>
                </div>
                {str2 ? <></> : <img src={arena} className='arenaImg'></img>}
            </div>

            <div className='gamesDiv' style={{marginTop: '-3%',marginBottom: '2%'}}>
                <Game currentClass='gameDiv gameDivCityZ' classPlayGame='playGame1' aboutGameDivClass='aboutGameDiv1' typeGame='City Z' type='Шутер' time='30 мин.' people='1-4 чел.' age='12+' minWidthButton='60%'>CITY Z</Game>
                <Game currentClass='gameDiv gameDivSurvivors' classPlayGame='playGame1' aboutGameDivClass='aboutGameDiv1' typeGame='City Z: Survivors' type='Шутер' time='30 мин.' people='1-4 чел.' age='12+' minWidthButton='60%'>CITY Z: SURVIVORS</Game>
                <Game currentClass='gameDiv gameDivAntidote' classPlayGame='playGame1' aboutGameDivClass='aboutGameDiv1' typeGame='City Z: Antidote' type='Шутер' time='30 мин.' people='1-4 чел.' age='12+' minWidthButton='60%'>CITY Z: ANTIDOTE</Game>
            </div>
            <Game currentClass='gameDiv gameDivRevolta' typeGame='Revolta' classPlayGame='playGame2'>REVOLTA</Game>
            <div className='gamesDiv'>
                <Game currentClass='gameDiv gameDivStationZarya' classPlayGame='playGame3' aboutGameDivClass='aboutGameDiv3' typeGame='Station Zarya' type='Фантастика' time='30 мин.' people='1-4 чел.' age='12+' minWidthButton='40%'>STATION ZARYA</Game>
                <Game currentClass='gameDiv gameDivLostSanctuary' classPlayGame='playGame3' aboutGameDivClass='aboutGameDiv3Kvest' typeGame='Lost Sanctuary' type='Квест' time='30 мин.' people='1-4 чел.' age='12+' minWidthButton='40%'>LOST SANCTUARY</Game>
            </div>
            {str2 ? <div className='OerGamesButtonDiv'>
                        <Button className='OerGamesButton' buyTicketButton={true}>ВЫБРАТЬ УДОБНУЮ ДАТУ ДЛЯ ИГРЫ </Button>
                    <img src={OurGameBrone} className='OerGamesButtonImg'></img></div> : <></>}
        </div>
    )
}