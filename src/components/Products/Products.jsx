import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";



import Img1 from "../../assets/p-1.jpg";
import Img2 from "../../assets/p-2.jpg";
import Img3 from "../../assets/p-3.jpg";
import Img4 from "../../assets/p-4.jpg";
import Img5 from "../../assets/p-5.jpg";
import Img6 from "../../assets/p-7.jpg";
import Img7 from "../../assets/p-9.jpg";

const ProductsData = [
  {
    id:1,
    img: Img1,
    title: "Boat Headphone",
    price: "1200",
    aosDelay:"0",
  },
  {
    id:2,
    img:Img2,
    title: "Rocky Mountain",
    price:"4220",
    aosDelay: "200",
  },
  {
    id:3,
    img:Img3,
    title: "Googles",
    price:"3220",
    aosDelay: "500",
  },
  {
    id:4,
    img:Img4,
    title: "Printed",
    price: "2220",
    aosDelay:"900",
  },
];
const ProductsData2 =[
  {
    id:5,
    img: Img5,
    title: "Boat Headphone",
    price: "1200",
    aosDelay:"0",
  },
  {
    id:2,
    img:Img2,
    title: "Rocky Mountain",
    price:"4220",
    aosDelay: "200",
  },
  {
    id:3,
    img:Img3,
    title: "Googles",
    price:"3220",
    aosDelay: "500",
  },
  {
    id:4,
    img:Img4,
    title: "Printed",
    price: "2220",
    aosDelay:"900",
  },
];

  const Products = () => {
    return (
      <div>
        <div className="container">
          {/* header section */}
          <Heading title="Our Products" subtitle="Explore Our Products"/>
          {/* body section */}
          <ProductCard data={ProductsData}/>
          <ProductCard data={ProductsData2}/>

        </div>
      </div>

    );
  };
  export default Products;