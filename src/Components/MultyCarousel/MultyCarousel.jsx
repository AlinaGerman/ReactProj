import CarouselMulty from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MultyCarousel.css'

import StarPeopleItem from '../StarPeople/StarPeopleItem.jsx';

import {dataComments} from './dataComments.js'
import CommentsItem from '../Comments/CommentsItem.jsx';

import {dataSales} from './dataSales.js'
import {dataNews} from './dataNews.js'
import SalesNewsItem from '../SalesNews/SalesNewsItem.jsx';

import {dataFooter} from './dataFooter.js'
import FooterItem from '../Footer/FooterItem.jsx';

import { dataElement2 } from '../BuyTicketModal/Content/Element2/dataElement.js';
import Element2Item from '../BuyTicketModal/Content/Element2/Element2Item.jsx';

import { dataElement3 } from '../BuyTicketModal/Content/Element3/dataElement3.js';
import Element3Item from '../BuyTicketModal/Content/Element3/Element3Item.jsx';

export default function MultyCarousel({type, displayElement4, displayElement3, displayElement9, dataComp, widthImg}){

  const responsive3 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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

  const responsive4 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
  const responsive45 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2
    }
  }
  const responsive9 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 9
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3.5
    }
  }

  return(
    <div className='carouselMultyDiv'>
      <CarouselMulty
        containerClass="carouselMulty"
        responsive={displayElement4 ? responsive4 : displayElement3 ? responsive3 : displayElement9 ? responsive9 : responsive45}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        rewind={(type=='buyTicket2' || type=='buyTicket3') ? true : false}
        centerMode={type=='buyTicket3' ? true : false}
        infinite={(type=='buyTicket2' || type=='buyTicket3') ? false : true}
        partialVisible={(type=='buyTicket2' || type=='buyTicket3') ? false :true}
        arrows={(type=='buyTicket2' || type=='buyTicket3') ? false : true}>
                  
          {dataComp?.map((data) => {
            if (type=='StarPeople'){
              return <StarPeopleItem key={data.text} data={data} widthImg={widthImg}></StarPeopleItem>
            }
          })}

          {dataComments.map((data) => {
            if (type=='Comments'){
              return <CommentsItem key={data.name} data={data}></CommentsItem>
            }
          })}

          {dataSales.map((data) => {
            if (type=='Sales'){
              return <SalesNewsItem data={data} key={data.image} isSales={true}></SalesNewsItem> 
            }
          })}

          {dataNews.map((data) => {
            if (type=='News'){
              return <SalesNewsItem data={data} key={data.image} isSales={false}></SalesNewsItem> 
            }
          })}       

          {dataFooter.map((data) => {
            if (type=='footer'){
              return <FooterItem data={data} key={data.image}></FooterItem>
            }
          })}

          {dataElement2.map((data) => {
            if (type=='buyTicket2'){
              return <Element2Item data={data} key={data.title}></Element2Item>
            }
          })}

          {dataElement3.map((data) => {
            if (type=='buyTicket3'){
              return <Element3Item data={data} key={data.name}></Element3Item>
            }
          })}


      </CarouselMulty> 
    </div>
  )
}