import './Comments.css'
import yandex from './yandex.svg'

export default function CommentsItem({... props}){
    return(
        <div className='CommentsItemDiv'>
            <div className='CommentsItemAvatarName'>
                <img src={props.data.avatar} width='14%'></img>
                <div className='CommentsItemNameData'>
                    <h6 className='CommentsItemName'>{props.data.name}</h6>
                    <div className='CommentsItemMarkData'>
                        <img src={props.data.mark} width='45%'></img>
                        <p className='CommentsItemData'>{props.data.date}</p>
                    </div>
                    
                </div>
                <img src={yandex} width='14%'></img>
            </div>
            <p className='CommentsItemComm'>{props.data.comm}</p>
        </div>
    )
}