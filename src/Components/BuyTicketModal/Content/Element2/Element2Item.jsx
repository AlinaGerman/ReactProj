import { useState } from 'react'
import Button from '../../../Buttons/Button'
import './Element2.css'

import info from './picture/info.svg'
import OpenDIalogModal from '../../../DialogModal/OpenDIalogModal'
import CloseButtonDialog from '../../../DialogModal/CloseButtonDialog'
import DetailesModal from '../../../Entertaiment/ContentEntert/Arena/games/DetailesModal/DateilsModal'

export default function Element2Item({nameButton,... props}){

    const [showDetalies, setShowDetalies] = useState(false)

    function openAboutArena(){
        setShowDetalies(true)
    }
    const [choise, setChoise]=useState(true)

    function changeChoise(){
        setChoise((prev) => !prev)
    }

    return(
        <div className={`Element2ItemDiv ${props.data.classDiv}`}>
            <img src={info} className='Element2ItemInfo' onClick={openAboutArena}></img>
            <div className='Element2ItemTitleButton'>
                <p className='Element2ItemTitle'>{props.data.title}</p>
                <Button className={choise ? 'Element2ItemButton' : 'Element2ItemButton active'} 
                    onClick={changeChoise} >{choise ? 'ВЫБРАТЬ' : 'ВЫБРАНО'}</Button>
            </div>

            <OpenDIalogModal open={showDetalies} className='showDetalies'>
                <CloseButtonDialog onClick={() => setShowDetalies(false)}></CloseButtonDialog>
                
                <div className='showDetaliesDiv'>
                    <DetailesModal typeGame={props.data.typeGame} type={props.data.type}>{props.data.typeGame}</DetailesModal>
                </div>
            </OpenDIalogModal>
        </div>
    )
}