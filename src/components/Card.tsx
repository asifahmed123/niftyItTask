
import { ProductType } from '../Layout/Home/Home';

interface PropType {
     product: ProductType;
     handleAddToCart: (product: ProductType) => void;
}
const Card = ({ product, handleAddToCart }: PropType) => {
     
     const {img, title, price } = product
     return (
          <div>
               <div className="card card-compact h-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">{title}</h2>
                         <p>Price: ${price}</p>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Card;