import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Login from "../components/loginForm/LoginForm";
import usePageTitle from "../hooks/UsePageTitle";
const login: React.FC = () => {
  return (
    <>
      {usePageTitle("Login | Archei Software")}
      <Header />
      <Login />
      <Footer />
    </>
  );
};

export default login;
