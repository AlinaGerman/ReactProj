import './GamesForCompany.css'

export default function TypeCommandDiv({children, img, marginTop}){
    return (
        <div className='TypeCommandDivDiv'>
            <img src={img} width='80%' style={marginTop ? {marginTop:'-9%'} : {}}></img>
            <h5 className='TypeCommandDivDivText'>{children}</h5>
        </div>
        
    )
}