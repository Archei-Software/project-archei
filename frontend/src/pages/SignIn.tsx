import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SignIn from "../components/signIn/SignIn";
import usePageTitle from "../hooks/UsePageTitle";
const login: React.FC = () => {
  return (
    <>
      {usePageTitle("Sign In | Archei Software")}
      <Header />
      <SignIn />
      <Footer />
    </>
  );
};

export default login;
