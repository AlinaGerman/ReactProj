import CarouselMulty3 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import './Element3.css'

import { dataElement3Month } from './dataElement3';

export default function CarouselEleemnt3(){
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }

    return(
        <div className='carouselMultyDiv'>
            <CarouselMulty3
            containerClass="carouselMulty"
            itemClass='itemCarouselElement3'
            responsive={responsive}
            autoPlay={false}
            rewind={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={false}
            partialVisible={true}
            arrows={false}>

                {dataElement3Month.map((data) => {
                    return <div>{data.name}</div>
                })}
                
            </CarouselMulty3>
        </div>
    )
}