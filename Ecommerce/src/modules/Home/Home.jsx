import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import Stats from "../../components/StatCard/Stats";

const Home = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data);
            setProducts(data)
        }
        fetchProducts()
    },[])

  return (
    <>
      <Hero />
      <div class="flex flex-col text-center w-full mt-20">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            PRODUCTS
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            MOST POPULAR PRODUCTS
          </h1>
        </div>
        {
            products.length > 0 ? 
            <Products products={products}/> :
            <div>Loading.....</div>
        }
      <Products />
      <FeatureCard/>
      <Stats/>
    </>
  );
};

export default Home;
