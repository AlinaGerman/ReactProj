import './AboutArena.css'

export default function AboutArenaContentOsobennost({img, children, width}){
    return(
        <>
            <img width={width} src={img}></img>
            <h5 className='AboutArenaContentOsobennostText'>{children}</h5>
        </>
    )
}