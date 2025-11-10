import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ProductCards from '../Components/ProductCards';

const Home = () => {
    const products = useLoaderData();
    const featureProducts=products.slice(0,6)
    return (
        <div>
          <div className='flex justify-between py-5 items-center'>
            <h1 className='text-2xl font-semibold'>Featured Products</h1>
            <Link to="/Products" className='btn btn-outline'>See All Products</Link>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            {
            featureProducts.map(product=>(
                <ProductCards  product={product}></ProductCards>
            ))
          }
          </div> 
        </div>
    );
};

export default Home;