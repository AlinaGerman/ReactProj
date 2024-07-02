import './Element4.css'
import { useState } from 'react'


export default function Element4Item({... props}){
    const [choise, setChoise]=useState(true)

    const [id, setId]=useState('')

    function changeChoise(){
        setChoise((prev) => !prev)
    }
    return(
        <li className={(props.data.seat=='Все места заняты') ? 'Element4ItemLi disabled' : choise ? 'Element4ItemLi' : 'Element4ItemLi active'} onClick={changeChoise}>
            <span>{props.data.time}</span>
            <span>{props.data.seat}</span>
            <span>{props.data.price}</span>
        </li>
    )
}