import CarouselMultyEmotions from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import EmotionsItem from '../EmorionsItem';
import './EmotionsCarouselMulty.css'

import {dataEmotions} from './dataEmotions.js'

export default function EmotionsCarouselMulty(){
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3.5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3.5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }

    return(
        <div className='carouselMultyDiv'>
            <CarouselMultyEmotions
            containerClass="carouselMulty"
            itemClass='itemCarouselMulty'
            sliderClass='sliderCarouseMulty'
            responsive={responsive}
            autoPlay={false}
            rewind={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={true}>

                {dataEmotions.map((data) => {
                    return <EmotionsItem data={data} key={data.img1}></EmotionsItem>
                })}
                
            </CarouselMultyEmotions>
        </div>
    )
}