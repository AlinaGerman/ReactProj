import plan from './plan.svg'
import './Reasons.css'
import Reason from './Reason'
import '../../App.css'

export default function Reasons(){
    return(
        <div className='allDiv' style={{marginBottom:'8%'}}>
            <p className='title'>Причины, по которым вы будете <br/>в восторге</p>

            <Reason></Reason>
        
            <img src={plan} className='plan'></img>
        </div>
    )
}