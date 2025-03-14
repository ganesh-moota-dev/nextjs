import React from 'react';

const ProductReview = async ({ params }: { params: Promise<{ productId: string, reviewId: string }> }) => {
    const {productId, reviewId} = await params;

    return (
        <div>
            <h2>Review {reviewId} for Product {productId}</h2>
        </div>
    )
}

export default ProductReview
