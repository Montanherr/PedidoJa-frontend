import React from "react";
import Hero from "../components/Hero/Hero";
import PopularRestaurants from "../components/PopularRestaurants/PopularRestaurants";
import PublicFeed from "../components/PublicFeed/PublicFeed";
import AboutSection from "../pages/About/About";
import PromoStores from "../components/PromoStores/PromoStores"

function HomePublic() {
  return (
    <>
      <Hero />
      <PopularRestaurants />
      <PromoStores />
      <PublicFeed />
      <AboutSection />
    </>
  );
}

export default HomePublic;
