import { textAlign } from '@mui/system';
import React from 'react';
import { ProductCard } from '../../Components/index.js';
import './Header.css'




const Header = () => {
  return <section className='header'>
          <div className="header__container">
               
       <div className="header__container-productcards">
         
       <div className='productcard-one'>
                 <ProductCard
                  heading='NEW ARRIVALS'
                  paragraph=''
                  src='https://cdn.shopify.com/s/files/1/0667/0133/files/very-terry-campaign-infinite-text-trans-port.mp4?v=1643422997'
                  bgColor= 'brown-bg'
                  key='3'
                  textAlign='left'
                  format= 'video'
                  />
                 </div>
                <div className='productcard-two'>
                <ProductCard
                    heading = 'LAST CHANCE'
                    paragraph= 'shop 30-50% off -Limited stock'
                    src='//cdn.shopify.com/s/files/1/0667/0133/files/lastchancejan22-highres_1400x.jpg?v=1643853035'
                    bgColor='blue-bg'
                    key='1'
                    textAlign='left'
                    format= 'image'/>
                </div>
                  <div className='productcard-three'>
                  <ProductCard
                       heading='BEST SELLERS'
                       paragraph='Pieces that speak for themselves'
                       src='//cdn.shopify.com/s/files/1/0667/0133/files/VeryTerryStudio_079-port_1400x.jpg?v=1643390863'
                       bgColor= 'brown-bg'
                       key='2'
                       textAlign='right'
                       format= 'image'/>
                  </div>
               
       </div>
  
          </div>
  </section>;
};

export default Header;
