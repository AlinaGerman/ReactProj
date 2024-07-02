import './PlusArena2.css'
import { dataContentPlus2 } from './dataContentPlus2'

export default function ContentPlus({type}){
    return(
        dataContentPlus2.map((data) => {
            if (type==data.type){
                return <div className='PlusArena2Div ContentPlusDiv'>
                            <img src={data.img} width={data.width} style={{ marginRight:'3%'}}></img>
                            <div>
                                <h3 className='ContentPlusDivTitle'>{data.title}</h3>
                                <p className='ContentPlusDivText'>{data.text}</p>
                            </div>
                        </div>
            }
        })
        
    )
}