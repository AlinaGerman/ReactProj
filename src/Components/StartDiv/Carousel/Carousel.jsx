import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import p1 from './p1.svg'
import p2 from './p2.svg'
import p3 from './p3.svg'

export default function CarouselDiscount() {
  return (
    <div className='carouselD'>
    <Carousel>
      <Carousel.Item>
        <img src={p1} className='discount_img'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={p2} className='discount_img'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={p3} className='discount_img'/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}