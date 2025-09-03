import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/headphone.png";
import Products from "./components/Products/Products";
import watch from "./assets/smartwatch2-removebg-preview.png";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 August to 10 September",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Mid Year Sale",
  title4: "akjxbqsijxuixhiuxhiuxhi",
  bgColor: "#410708ff",
};

const BannerData2 = {
  discount: "70% OFF",
  title: "Fine Smile",
  date: "10 August to 10 September",
  image: watch,
  title2: "Watch Supermacy",
  title3: "Mid Year Sale",
  title4: "Press shop now and get 70% discount",
  bgColor: "#2b5c51ff",
};
const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overfloe-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
    </div>
  );
};
export default App;
