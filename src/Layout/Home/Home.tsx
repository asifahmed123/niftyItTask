import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../Shared/Header';

export interface ProductType {
     _id: string;
     service_id: string;
     title: string;
     img: string;
     price: string;
     description: string;
}

const Home = () => {
     const [products, setProducts] = useState<ProductType[]>([]);
     const [cart, setCart] = useState<ProductType[]>([])

     useEffect(() => {
          fetch('./public.json')
               .then(res => res.json())
               .then(data => {
                    setProducts(data)
                    console.log(data)
               })
     }, []);

     const handleAddToCart = (product: ProductType) => {
          const newCart = [...cart, product];
          setCart(newCart)
          console.log(newCart)
     }

     return (
          <div>
               <Header cart={cart}></Header>
               <div className='grid grid-cols-3'>
                    {
                         products.map(product => <Card key={product._id} product={product} handleAddToCart={handleAddToCart}></Card>)
                    }
               </div >
          </div>
     );
};

export default Home;