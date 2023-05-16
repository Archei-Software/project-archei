import React from "react";
import Header from "../components/header/Header";
import Footer from "./../components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';
import HeroMain from '../components/heroMain/HeroMain';
import FeatureMain from "../components/featureMain/FeatureMain";
import FeatureMain1 from "../components/featureMain1/FeatureMain1";



const Home = () => {
  return (
    <>
      {usePageTitle('Archei Software')}

        <Header />
        <HeroMain />
        <FeatureMain />
        <FeatureMain1 />
        <Footer />
      
    </>
  );
};

export default Home;