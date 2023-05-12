import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';



const Home = () => {
  return (
    <>
      {usePageTitle('Archei Software')}
      <Header />
      <Footer />
    </>
  );
};

export default Home;