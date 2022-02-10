import React from 'react';
import  Video from '../Video/Video';
import Btn from '../Button/Btn';
import './ProductCard.css'

const ProductCard = ({heading,src,paragraph,bgColor,textAlign, format}) => {
  return <div className='productcard' style={{ backgroundImage: `url(${src})` , backgroundSize: 'cover'}} >
          <div className="productCard__img"  >
             

         
          </div>
           <div className={`productCard__content ${textAlign}`}>
               <h2>
                   {heading}
               </h2>
               <p>
                   {paragraph}
               </p>
               <Btn
                text='SHOP WOMEN'
                bgColor={bgColor}
               />
               <Btn
                text='SHOP MEN'
                bgColor={bgColor}
               />
           </div>
           
  </div>;
};

export default ProductCard;
