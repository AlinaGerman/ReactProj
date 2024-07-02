import './InfArena.css'

export default function InfArena({im, children, ... props}){
    return(
        <>
            <img src={im} className='imgInfArena'></img>
            <div className='textInfArena'>{children}</div>
        </>
    )
}