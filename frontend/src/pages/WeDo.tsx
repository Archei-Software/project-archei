import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';

const WeDo = () => {
  return (
    <>
    {usePageTitle('O que fazemos | Archei Software')}
      <Header />
      <Footer />
    </>
  );
};

export default WeDo;