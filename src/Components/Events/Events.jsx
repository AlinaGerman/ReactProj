import { useState } from 'react'
import './Events.css'

import BirthDayChild from './TabEvents/birthDayChild/DirthDayChild'
import BirthDay from './TabEvents/birthDay/BirthDay'
import Corporative from './TabEvents/corporative/Corporative'
import NoStandartEvent from './TabEvents/noStandartEvent/NoStandarEvent'
import Sertifikat from './TabEvents/sertifikat/Sretifilat'

import TabSection from '../TabSection/TabSection'
import TabVector from '../TabSection/TabVector'

import './TabEvents/TabEvents.css'

export default function Events(){
    const [currentEvent, setCurrenEvent]=useState('birthDayChild')

    return(
        <div className='allDiv' style={{marginBottom:'5%'}} id='event'>
            <h1 className='title'>Наши мероприятия</h1>
            
            <div className='eventButtonDiv'>
                <TabSection active={currentEvent} onChange={(current) => setCurrenEvent(current)} 
                    activeContent={['birthDayChild','birthDay','corporative','noStandartEvent','sertifikat']}
                    name={['ДЕТСКИЕ ДНИ РОЖДЕНИЯ','ВЗРОСЛЫЕ ДНИ РОЖДЕНИЯ','КОРПОРАТИВЫ','НЕСТАНДАРТНОЕ МЕРОПРИЯТИЕ','ПОДАРОЧНЫЕ СЕРТИФИКАТЫ']}
                    stylee={['0.5%','0.5%','0.5%','0.5%','0%']}
                    EntertEvent={false}></TabSection>
            </div>

            <div style={{display:'flex', marginBottom:'0.3%'}}>
                <TabVector active={currentEvent} activeContent={['birthDayChild','birthDay','corporative','noStandartEvent','sertifikat']} EntertEvent={false}></TabVector>
            </div>

            {currentEvent==='birthDayChild' && <BirthDayChild />}
            {currentEvent==='birthDay' && <BirthDay/>}
            {currentEvent==='corporative' && <Corporative/>}
            {currentEvent==='noStandartEvent' && <NoStandartEvent/>}
            {currentEvent==='sertifikat' && <Sertifikat/>}
        </div>
    )
}