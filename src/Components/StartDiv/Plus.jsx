import './StartDiv.css'

export default function Plus({children,icon, ... props}){
    return(
        <>
            <img src={icon} className='icon'></img>
            <div style={{paddingTop:'1%'}}{... props}>{children}</div>
        </>
    )
}