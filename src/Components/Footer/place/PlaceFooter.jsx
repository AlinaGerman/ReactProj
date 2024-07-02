import './PlaceFooter.css'

export default function PlaceFooter({img, children, width}){
    return(
        <div className='PlaceFooterDiv2'>
            <img src={img} width={width} style={{marginRight:'4%'}}></img>
            <span className='PlaceFooterDiv2Text'>{children}</span>
        </div>
    )
}