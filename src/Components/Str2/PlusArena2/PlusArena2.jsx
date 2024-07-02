import './PlusArena2.css'
import PlusArena2Div from './PlusArena2Div'

export default function PlusArena2({type1, type2, type3, type4}){
    return(
        <div className='allDiv PlusArena2MainDiv'>
            <PlusArena2Div type1={type1} type2={type2}></PlusArena2Div>
            <PlusArena2Div type1={type3} type2={type4}></PlusArena2Div>
        </div>
    )
}