import Carousel from 'react-bootstrap/Carousel'
import './CarouselEvent.css'
import bd1 from './bd1.jpg'
import avatar from './avatar.svg'

import CarouselItem from './CarouselItem';
import CarouselCaption from './CarouselCaption';

import './CarouselSertificat.css'
import CarouselItemSertificat from './CarouselItemSertificat';
import fon from './fon.svg'


export default function CarouselEvent({isSertificat }) {
  return (
    <div className={isSertificat ? 'carouselEventSertificat' : 'carouselEvent'}>
      <Carousel indicators={false}>
        <Carousel.Item style={{padding:'0%'}}>
          {isSertificat ? 
            <CarouselItemSertificat imgaes={fon} price='10 000₽' li1='3 часа доступа к кубам' li2='2 игры на Арене' li3='Безлимитный доступ в VR-парк на 3 часа' nameButton='ПОДАРИТЬ'>
              ПОДАРОЧНЫЙ <br/> СЕРТИФИКАТ
            </CarouselItemSertificat> : <CarouselItem imgaes={bd1}></CarouselItem>}
          <Carousel.Caption >
            {isSertificat ? <></> : 
            <CarouselCaption text='Отличное развлечение для всей компании. Лучший корпоратив в жизни...' avatar={avatar} fio='Александр Александров'>
              ДЕНЬ РОЖДЕНИЯ САШИ, 13 ЛЕТ В <br/>ПРОШЛУЮ СУББОТУ
            </CarouselCaption>}
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item style={{padding:'0%'}}>
          {isSertificat ? 
            <CarouselItemSertificat imgaes={fon} price='10 000₽' li1='3 часа доступа к кубам' li2='2 игры на Арене' li3='Безлимитный доступ в VR-парк на 3 часа' nameButton='ПОДАРИТЬ'>
              ПОДАРОЧНЫЙ <br/> СЕРТИФИКАТ
            </CarouselItemSertificat> : <CarouselItem imgaes={bd1}></CarouselItem>}
          <Carousel.Caption >
            {isSertificat ? <></> : <CarouselCaption text='Отличное развлечение для всей компании. Лучший корпоратив в жизни...' avatar={avatar} fio='Александр Александров'>ДЕНЬ РОЖДЕНИЯ САШИ, 13 ЛЕТ В <br/>ПРОШЛУЮ СУББОТУ</CarouselCaption>}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
  )
}