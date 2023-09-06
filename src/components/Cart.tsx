import React from 'react';

import { ProductType } from '../Layout/Home/Home';
interface ItemType {
     item: ProductType;
}
const Cart = ({item}: ItemType) => {
     const {img} = item
     return (
          <div>
               <div className='lg:w-[1200px] lg:h-[100px] md:w-[720px] md:h-[80px] sm:w-[480px] sm:h-[60px] border border-gray-700'>
                    <div>
                         <img src={img} width={80} height={80} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default Cart;