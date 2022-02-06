import React from 'react';
import Btn from '../Button/Btn';
import './ProductCard.css'

const ProductCard = ({heading,src,paragraph,bgColor,textAlign}) => {
  return <div className='productcard'>
          <div className="productCard__img">
          <img src={src}/>
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
