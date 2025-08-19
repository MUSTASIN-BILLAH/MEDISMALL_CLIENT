import React from "react";
import Banner from "../Components/Banner";
import MedicineList from "../Components/MedicineList";
import FAQ from "../Components/FAQ";
import DiscountSection from "../Components/DiscountSection";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <MedicineList />
      <DiscountSection />
      <FAQ />
    </div>
  );
};

export default Home;
