import React from 'react';
import { useLoaderData } from 'react-router';

const Products = () => {
     const products = useLoaderData();
    return (
        <div>
            <div>
          <div className='flex justify-between py-5 items-center'>
            <h1 className='text-2xl font-semibold'>Featured Products</h1>
            <Link to="/Products" className='btn btn-outline'>See All Products</Link>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            {
            products.map(product=>(
                <ProductCards  product={product}></ProductCards>
            ))
          }
          </div> 
        </div>
        </div>
    );
};

export default Products;