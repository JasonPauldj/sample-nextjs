import { Product } from '../types';
import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';

export const ProductCard = ({ product } : {
    product: Product
}) => {

    const router = useRouter()

    return (
        <div className='mb-2 mt-2 '>
            <div>
                <div className='shadow card-bg card-txt-color' onClick={()=>{router.push(`/products/${product.id}`)}}>
                    <div >
                        {/*  */}
                        <div>{product.title}</div>
                    </div>
                    <div>
                        <div>
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductCard;