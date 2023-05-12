import Header from "./../components/header/Header";
import Footer from "../components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';

const Contact = () => {
  return (
    <>
    {usePageTitle('Contato | Archei Software')}
      <Header />
      <Footer />
    </>
  );
};

export default Contact;