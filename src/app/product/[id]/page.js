import { data } from '@/app/utils/data'
import AddToCart from '@/components/AddToCart'
import ProductRate from '@/components/ProductRate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductDetailPage({ params: { id } }) {
    const product = data.products.find((x => x.id === id))

    if (!product) {
        return <div>Product Not Dound</div>
    }

    return (
        <div>
            <div className="py-2">
                <Link href="/">back to products</Link>
            </div>
            <div className="grid md:grid-cols-4 md:gap-3">
                <div className="md:col-span-2">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    ></Image>
                </div>
                <div>
                    <ul>
                        <li>
                            <h1 className="text-lg">{product.name}</h1>
                        </li>

                        <li>
                            <ProductRate rate={product.rating} count={product.numReviews} />
                        </li>

                        <li>
                            <hr className="my-3" />
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="mb-5 block rounded-lg border border-gray-200 shadow-md p-5">
                        <div className="mb-2 flex justify-between">
                            <div>Price</div>
                            <div>${product.price}</div>
                        </div>

                        <AddToCart product={product} redirect={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

