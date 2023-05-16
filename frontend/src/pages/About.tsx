import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import usePageTitle from "../hooks/UsePageTitle";
import AboutTeam from "../components/aboutTeam/AboutTeam";

const About = () => {
  return (
    <>
      {usePageTitle("Sobre a Archei | Archei Software")}
      <Header />
      <AboutTeam />
      <Footer />
    </>
  );
};

export default About;
