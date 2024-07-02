import './DetailesModal.css'

export default function DescDetailesModal({children, ... props}){
    return(
        <span className={`genrePlace ${props.className}`} style={props.style}>{children}</span>
    )
}