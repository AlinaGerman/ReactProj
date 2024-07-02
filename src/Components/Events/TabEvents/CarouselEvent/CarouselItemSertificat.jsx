import Button from '../../../Buttons/Button'
import './CarouselSertificat.css'

export default function CarouselItemSertificat({imgaes, children, price, li1, li2, li3, nameButton, ... props}){
    return(
        <>
        <img src={imgaes} className='fonSertificat'></img>
          <div className='divSertificatEvent'>
            <div className='titleSertificat'>
                <h5 className='titleContentSertificat'>{children}</h5>
                <h1 className='priceContentSertificat'>{price}</h1>
            </div>

            <hr className='hrContentSertificat' />

            <ul className='listSertificat'>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
            </ul>
            
            <Button className='giveSertificat'>{nameButton}</Button>
        </div>
      </>
    )
} 