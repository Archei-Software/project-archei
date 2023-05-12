import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';

const ContactPage = () => {
  return (
    <>
    {usePageTitle('Contato | Archei Software')}
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;