import { Product } from '../types';
import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';

export const ProductCard = ({ product } : {
    product: Product
}) => {

    const router = useRouter()

    return (
        <div className='mb-2 mt-2 bg-dark text-light shadow'>
            <div className='p-3'>
                <div className='shadow' onClick={()=>{router.push(`/products/${product.id}`)}}>
                    <div >
                        <div>{product.title}</div>
                    </div>
                    <div>
                        <div>
                            {product.description}
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img src={product.images[0]} className='w-64 h-64' />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductCard;