import Arena from './ContentEntert/Arena/Arena'
import Attractions from './ContentEntert/Attractions'
import Stends from './ContentEntert/Stends'
import Kub from './ContentEntert/Kub'
import './Entertaiment.css'
import { useState } from "react"

import TabSection from '../TabSection/TabSection'
import TabVector from '../TabSection/TabVector'
import EntertDiv from './ContentEntert/EntertDiv'


export default function Entertaiment(){
    const [currentEntert, setCurrentEntert]=useState('arena')

    return(
        <div className='allDiv' id='entertaiment'>
            <h1 className='title'>Наши развлечения</h1>

            <TabSection active={currentEntert} onChange={(current) => setCurrentEntert(current)} 
                activeContent={['arena','attractions','stends','kub', 'childZone', 'pvp']}
                name={['АРЕНЫ','АТТРАКЦИОНЫ','СТЕНДЫ','КУБЫ', 'ДЕТСКАЯ ЗОНА','PVP-СОРЕВНОВАНИЯ']}
                stylee={['0.3%','0.3%','0.3%','0%','0.3%','0%']}
                EntertEvent={true}></TabSection>

            <div style={{display:'flex', marginBottom:'0.3%'}}>
                <TabVector active={currentEntert} activeContent={['arena','attractions','stends','kub', 'childZone', 'pvp']} EntertEvent={true}></TabVector>
            </div>


            {currentEntert==='arena' && <Arena>Арена</Arena>}
            {currentEntert==='attractions' && <EntertDiv>Аттракционы</EntertDiv>}
            {currentEntert==='stends' && <EntertDiv>Стенды</EntertDiv>}
            {currentEntert==='kub' && <EntertDiv>Куб</EntertDiv>}
            {currentEntert==='childZone' && <EntertDiv className='mobileArena'>Детская зона</EntertDiv>}
            {currentEntert==='pvp' && <EntertDiv className='mobileArena'>PVP-Соревнования</EntertDiv>}
        </div>
    )
}