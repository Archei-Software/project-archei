import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import usePageTitle from '../../hooks/UsePageTitle';

const Error404 = () => {
  return (
  <>
  {usePageTitle('Erro 404 | Archei Software')}
    <Header />
    <div className="flex flex-col justify-center items-center mt-52 mb-52">
      <h1 className="text-6xl font-bold mb-4 text-white">ERRO 404</h1>
      <p className="text-xl mb-4 text-white text-center">Oops, parece que a página que você está procurando não existe...</p>
      <a href="/" className="text-red-500 hover:text-red-700">
        Voltar para a página inicial
      </a>
    </div>
    <Footer />
    </>
  );
};

export default Error404;