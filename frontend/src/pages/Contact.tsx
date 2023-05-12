import Header from "../components/header/Header";
import Message from "../components/message/Message";
import Footer from "../components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';

const Contact = () => {
  return (
    <>
    {usePageTitle('Contato | Archei Software')}
      <Header />
      <Message />
      <Footer />
    </>
  );
};

export default Contact;