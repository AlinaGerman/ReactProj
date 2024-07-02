import './Footer.css'

export default function PFooter({isTopHr, children, ... props}){
    return(
        <>
            {isTopHr ? <hr/> : <></>}
            <p className={isTopHr ? 'pFrooter' : 'pFrooter pFrooterBlur'} style={props.style}>{children}</p>
        </>
    )
}