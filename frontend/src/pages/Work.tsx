import Header from "./../components/header/Header";
import Footer from "../components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';

const Work = () => {
  return (
    <>
    {usePageTitle('Nosso trabalho | Archei Software')}
      <Header />
      <Footer />
    </>
  );
};

export default Work;