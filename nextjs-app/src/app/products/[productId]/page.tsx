import React from 'react'

const ProductDetails = async ({params}:{params: Promise<{productId: string}>}) => {
    const productId = (await params).productId;
  return (
    <div>
      <p>product {productId} details</p>
    </div>
  )
}

export default ProductDetails
