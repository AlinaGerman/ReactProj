import activeVector from './activeVector.svg'
import './ButtonEntert.css'

export default function VectorDiv({isActive, EntertEvent}){
    return(
        <div className={EntertEvent ? "vectorEnt" : 'vectorEvent'} style={{marginRight:'0.3%'}}>
                {isActive ? <img src={activeVector} style={{width:'30%'}}></img> : <img></img>}
        </div>
    )
}