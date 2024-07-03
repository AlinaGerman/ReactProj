import { links } from './links';
import './EntertaimentLink.css'
import './LanguageLink.css'
import './HolidaysLink.css'

export default function Amenu({nameLink,onClickLang}){
    return (
        links.map((link) => {
            if (link.id==nameLink && 'entertainment'==nameLink){
                return <a href={link.url}> <div className={`EntertLink ${link.class}`}>
                    <div className='EntertLinkTextDiv'>
                        
                    </div><p className='EntertLinkText'>{link.title}</p>
                    </div></a>
            } else if (link.id==nameLink && 'holidays'==nameLink){
                return <a href={link.url}><div className='holidLink'>
                            <img src={link.icon} width='14%'/>
                            <p className='holidLinkText'>{link.title}</p>
                        </div></a>
            } else if (link.id==nameLink && 'language'==nameLink){
                return <div className='langLink' style={link.title=='РУССКИЙ' ? { opacity:'0.3'} : {opacity:'1'}} onClick={onClickLang}>{link.title}</div>
            }
        })
    )
}

/* <><a href={link.url}>{link.title}</a>
                        </>*/
