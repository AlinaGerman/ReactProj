import './Game.css'

export default function AboutGame({children, ... props}){
    return(
        <p className='aboutGame' {... props}>{children}</p>
    )
}