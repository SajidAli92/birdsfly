import React from "react";
import CategoryContainer from "./CategoryContainer";
import AdSlider from "./AdSlider";
import OfferSlider from "./OfferSlider";
import SpecialOffers from "./SpecialOffers";
import Footer from "./Footer";
import OfferSlider2 from "./OfferSlider2";
import OfferSliderMens from "./OfferSliderMens";
// import OfferSliderWomens from "./OfferSliderWomens";
import SubcategoryBox from "./SubcategoryBox";


function Home() {
  return (

      <div className="Home">
          <CategoryContainer />
          <AdSlider /> 
          <SubcategoryBox/>
          <OfferSlider />
          <SpecialOffers /> 
          <OfferSlider2 />
          <OfferSliderMens />
          {/* <OfferSliderWomens /> */}
          <Footer />      

      </div>

  );
}

export default Home;
