import '../Entertaiment.css'

export default function EntertDiv({children, ... props}){
    return (
        <div className={`mainDivArena ${props.className}`}>
            <h2 className="content-entert-title">{children}</h2>
        </div>
    )
}