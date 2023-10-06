import { Product } from '../types';
import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';

export const ProductDetailedCard = ({ product } : {
    product: Product
}) => {

    const router = useRouter()

    let images;

    if(product && product.images.length > 0)
    {
        images = product.images.map((i) =><img src={i} className='w-64 h-64 mr-3' /> );
    }

    return (
        <div className='mb-2 mt-2 bg-dark text-light shadow'>
            <div className='p-3'>
                <div className='shadow' onClick={()=>{router.push(`/products/${product.id}`)}}>
                    <div className='flex justify-between'>
                        <div className='font-extrabold'>{product.title}</div> 
                        <button className="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-2 rounded-full">
                        Price : {product.price}
</button>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <div>
                            {product.description} 
                        </div>
                        <button className="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-2 rounded-full">
                        Rating : {product.rating}
</button>
                    </div>
                    <div className='flex justify-center'>
                        {images}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductDetailedCard;