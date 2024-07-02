import './Footer.css'

export default function PolicyTextFooter({children, ... props}){
    return(
        <p className='FooterPolit' {... props}>{children}</p>
    )
}