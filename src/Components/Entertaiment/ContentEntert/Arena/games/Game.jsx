import './Game.css'
import play from '../play.svg'
import AboutGame from './AboutGame'

import OpenDIalogModal from '../../../../DialogModal/OpenDIalogModal'
import { useState } from 'react'
import CloseButtonDialog from '../../../../DialogModal/CloseButtonDialog'
import DetailesModal from './DetailesModal/DateilsModal'
import Button from '../../../../Buttons/Button'

export default function Game({currentClass,typeGame, classPlayGame, children, titleClass, aboutGameDivClass, type, time, people, age, minWidthButton,... props}){
    const [showDetalies, setShowDetalies] = useState(false)

    function openAboutArena(){
        setShowDetalies(true)
    }

    return(
        <div className={currentClass} {... props}>
            <img src={play} className={classPlayGame}></img>
            {typeGame=='Revolta' ? <div className='aboutGame2'>
                                            <h2 style={{marginRight:'12%', fontSize:'250%'}}>{children}</h2>
                                            <div className='aboutGameDiv2'>
                                                <AboutGame>Шутер</AboutGame>
                                                <AboutGame>30 мин.</AboutGame>
                                                <AboutGame>1-6 чел.</AboutGame>
                                                <AboutGame>12+</AboutGame>
                                            </div>
                                            <div style={{minWidth:"25%", fontSize:'115%'}}>
                                                <Button className='gameButton broneButtonArena'>ЗАБРОНИРОВАТЬ</Button>
                                                <Button className='gameButton detailesButtonArena' onClick={openAboutArena}>ПОДРОБНЕЕ</Button>                        
                                            </div>
                                        </div> : 
                                        <>
                                            <h3 className='titleGame'>{children}</h3>
                                            <div className={aboutGameDivClass}>
                                                <AboutGame>{type}</AboutGame>
                                                <AboutGame>{time}</AboutGame>
                                                <AboutGame>{people}</AboutGame>
                                                <AboutGame>{age}</AboutGame>
                                            </div>
                                            <div style={{minWidth:`${minWidthButton}`}}>
                                                
                                                <Button className='gameButton broneButtonArena'>ЗАБРОНИРОВАТЬ</Button>
                                                <Button className='gameButton detailesButtonArena' onClick={openAboutArena}>ПОДРОБНЕЕ</Button>
                                            </div>
                                        </>}

            <OpenDIalogModal open={showDetalies} className='showDetalies'>
                <CloseButtonDialog onClick={() => setShowDetalies(false)}></CloseButtonDialog>
                
                <div className='showDetaliesDiv'>
                    <DetailesModal typeGame={typeGame} type={type}>{typeGame}</DetailesModal>
                </div>
            </OpenDIalogModal>

        </div>
    )
}