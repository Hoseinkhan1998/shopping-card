import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductRate from './ProductRate'
import AddtoCart from './AddToCart'

export default function ProductItem({ product }) {
    return (
        <div className=' mb-5 block rounded-lg shadow-md' style={{ border: '1px solid rgb(156 153 175)' }} >
            <Link href={`/product/${product.id}`}>
                <Image
                    src={product.image}
                    width={400}
                    height={400}
                    alt={product.name}
                    className=' rounded shadow object-cover h-[600px] sm:h-[450px] w-full' />
            </Link>
            <div className='flex flex-col justify-center items-center p-5'>
                <Link href={`/product/${product.id}`}>
                    <h2 className=' text-lg min-h-14'>{product.name}</h2>
                </Link>
                <ProductRate rate={product.rating} count={product.numReviews} />
                <p className='mb-2'>{product.brand}</p>
                <p>${product.price}</p>
                <AddtoCart showQty={false} product={product} increasePerClick={true} redirect={false} />
            </div>
        </div>
    )
}
