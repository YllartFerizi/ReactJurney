import React from 'react'
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <main>
      <ProductCard
        productName="Venus"
        price={300000}
        isOnSale={false}
      />
      <ProductCard
        productName="Mars"
        price={250000}
        isOnSale
        salePrice={200000}
        saleExpiry="2023-10-31"
      />
    </main>
  );
}
export default App