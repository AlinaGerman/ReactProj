import './Games2.css'

export default function Games2({children, img, develop, ... props}){
    return(
        <div className={develop ? 'Games2MainDiv Games2MainDivDevelop' : "Games2MainDiv"}>
            <div className={develop ? 'Games2Div Games2DivDevelop' : 'Games2Div'}>
                <h1 className='GamesForCompanyTitle'>{props.title}</h1>
                <h5>{props.text}</h5>
                {children}
            </div>
            <img src={img} width='52%' style={{marginTop:'2%'}}></img>
        </div>
    )
}