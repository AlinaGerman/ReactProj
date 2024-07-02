import { links } from './links';
export default function Amenu({nameLink,onMouseEnter,onMouseLeave}){
    return (
        links.map((link) => {
            if (link.id==nameLink){
                return <><a href={link.url}>{link.title}</a>
                        </>
            }
        })
    )
}