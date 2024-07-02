import './Info.css'


export default function CountruesClub({children,text,... props}){
    return(
        <div {... props}>
            <p className='countries-club-title'>{children}</p>
            <p className='countries-club-text'>{text}</p>
        </div>
        
    )
}