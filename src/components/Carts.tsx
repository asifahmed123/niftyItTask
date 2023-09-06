

import { ProductType } from '../Layout/Home/Home';
import Cart from './Cart';
interface CartType {
     cart: ProductType[];
}
const Carts = ({ cart }: CartType) => {

     let total = 0;
     for (const product of cart) {
          total = total + parseInt(product.price)
     }

     // const { title, img, price } = cart;

     return (
          <div>
               {
                    cart.map(item => <Cart key={item._id} item={item}></Cart>)
               }
          </div>
     );
};

export default Carts;