import ContentPlus from './ContentPlus'
import './PlusArena2.css'

export default function PlusArena2Div({type1, type2}){
    return(
        <div className='PlusArena2Div'>
                <ContentPlus type={type1}></ContentPlus>
                <ContentPlus type={type2}></ContentPlus>
        </div>
    )
}