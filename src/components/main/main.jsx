import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { useEffect } from "react";
import axios from 'axios';
import { Sort } from "../Sort/Sort";

export const Main = ({products, setProducts, convertPrice}) => {
  useEffect(()=>{
    axios.get("/data/products.json").then((data)=>{
      setProducts(data.data.products)
    });
  },[setProducts]);


  return (
    <>
      <EventBanner />
      <Sort setProducts={setProducts} products={products}/>
      <main className={styles.flex_wrap}>
        {products.map((product)=>{
          return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice}/>
        })}
      </main>
    </>
  );
};
