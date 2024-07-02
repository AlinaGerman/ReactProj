import './Element3.css'
import { useState } from 'react'


export default function Element3Item({... props}){
    const [choise, setChoise]=useState(true)

    function changeChoise(){
        setChoise((prev) => !prev)
    }

    return(
        <div className={choise ? 'Element3ItemDiv' : 'Element3ItemDiv active'} onClick={changeChoise}>
            <p className='Element3ItemText'>{props.data.day}</p>
            <p className='Element3ItemText'>{props.data.week}</p>
        </div>
    )
}

