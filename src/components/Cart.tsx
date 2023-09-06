

import { ProductType } from '../Layout/Home/Home';
interface ItemType {
     cart: ProductType[];
}
const Cart = ({ cart }: ItemType) => {
     
     return (
          <div>
               <div className='lg:w-[1200px] lg:h-[100px] md:w-[720px] md:h-[80px] sm:w-[480px] sm:h-[60px] border border-gray-700'>
                    {
                         cart.map(item => <>
                              <div>
                                   <img src={item.img} width={80} height={80} alt="" />
                              </div>
                         </>)
                    }
               </div>
               <h2>{cart.length}</h2>
          </div>
     );
};

export default Cart;