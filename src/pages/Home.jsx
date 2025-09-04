import React from "react";
import HeroSection from "../components/home/HeroSection";
import Category from "../components/home/Category";
import Banner from "../components/home/Banner";
import TopSales from "../components/home/TopSales";
import Feedback from "../components/home/Feedback";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Category />
      <Banner />
      <TopSales />
      <Feedback />
      <Contact />
    </main>
  );
};

export default Home;
