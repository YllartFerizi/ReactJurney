export interface BaseProps {
    productName : string;
    price : number ;

}
export interface ProductCardSaleProps {
    
    isOnSale : true;
    salePrice : number;
    saleExpiry: string;
}

export interface ProductCardNoSaleProps {
   
    isOnSale : false;
}
