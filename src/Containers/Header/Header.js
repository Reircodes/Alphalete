import { textAlign } from '@mui/system';
import React from 'react';
import { ProductCard } from '../../Components/index.js';
import './Header.css'


const ProductCards = [
  {
    heading : 'LAST CHANCE',
    paragraph: 'shop 30-50% off -Limited stock',
    src:'//cdn.shopify.com/s/files/1/0667/0133/files/lastchancejan22-highres_1400x.jpg?v=1643853035',
    bgColor:'blue-bg',
    key:'1',
    textAlign:'left'
    
  },
  {
    heading:'BEST SELLERS',
    paragraph:'Pieces that speak for themselves',
    src:'//cdn.shopify.com/s/files/1/0667/0133/files/VeryTerryStudio_079-port_1400x.jpg?v=1643390863',
    bgColor: 'brown-bg',
    key:'2',
    textAlign:'right'

  }
]


const Header = () => {
  return <section className='header'>
          <div className="header__container">
               {
                ProductCards.map((content)=> (
                  <ProductCard
                   heading={content.heading}
                   paragraph={content.paragraph}
                   src={content.src}
                   bgColor={content.bgColor}
                   key={content.key}
                   textAlign={content.textAlign}/>
                   
                ))
               }
  
          </div>
  </section>;
};

export default Header;
