import Header from "./../components/header/Header";
import Footer from "../components/footer/Footer";
import Works from "../components/work/Work";
import usePageTitle from '../hooks/UsePageTitle';

const WeDo = () => {
  return (
    <>
    {usePageTitle('O que fazemos | Archei Software')}
      <Header />
      <Works />
      <Footer />
    </>
  );
};

export default WeDo;