import React from 'react'
import './ProductCard.css'
import {BaseProps,ProductCardNoSaleProps,ProductCardSaleProps} from '../interfaces/interfaces'

type ProductCardProps = BaseProps & (ProductCardNoSaleProps| ProductCardSaleProps)
function formatPrice(price:number) {
    return price.toLocaleString("en-US", {
        style:"currency",
        currency: "USD"
    })
}
const ProductCard = (props : ProductCardProps) => {
    const {productName,price,isOnSale} = props;
  return (
    <div className={`product-card ${isOnSale ? "on-sale" : ""}`}>
        <h3 className="product-name">{productName}</h3>
        <div className="price">
            <div className="regular-price">{formatPrice(price)}</div>
            {isOnSale && (
                <>
                <div className="sale-price">{formatPrice(props.salePrice)}</div>
                <div className="sale-expiry">
                    Sale ends: {props.saleExpiry}
                </div>
                </>
            )}
        </div>
    </div>
  )
}

export default ProductCard