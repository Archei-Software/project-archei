import Header from "./../components/header/Header";
import Footer from "../components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';

const About = () => {
  return (
    <>
    {usePageTitle('Sobre a Archei | Archei Software')}
      <Header />
      <Footer />
    </>
  );
};

export default About;