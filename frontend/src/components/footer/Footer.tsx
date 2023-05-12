import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinkedin, SiGithub } from "react-icons/si";
import logo from "./../../assets/imgs/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101010] text-white pt-12 border-t border-t-[#1d1e20]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="Logo da Archei" className="w-44 mb-4 mr-2" />
          <div className="md:w-1/3 flex justify-center">
            <a
              href="https://github.com/Archei-Software"
              className="mx-4"
              target="_blank"
            >
              <SiGithub size={24} className="hover:text-red-600" />
            </a>
            <a href="https://linkedin.com/" className="mx-4" target="_blank">
              <SiLinkedin size={24} className="hover:text-red-600" />
            </a>

            <a
              href="https://twitter.com/archeisoftware"
              className="mx-4"
              target="_blank"
            >
              <FaTwitter size={24} className="hover:text-red-600" />
            </a>
            <a
              href="https://www.instagram.com/ArcheiSoftware/"
              className="mx-4"
              target="_blank"
            >
              <FaInstagram size={24} className="hover:text-red-600" />
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0 mr-5 ml-2">
          <h2 className="text-xl font-bold mb-4">Sobre a Archei</h2>
          <p className="text-white text-justify">
            &nbsp; A Archei Software é uma empresa especializada no
            desenvolvimento de plataformas e soluções digitais que visam ajudar
            organizações a alcançarem seus objetivos de negócios por meio de
            tecnologia inovadoras e eficientes. A empresa tem como objetivo
            fornecer soluções personalizadas e escaláveis para empresas de todos
            os tamanhos e setores de forma sustentável.
          </p>
          <a href="/" className="text-red-500 hover:text-red-700">
            Seguir para a página.
          </a>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0 mr-5 ml-2">
          <h2 className="text-xl font-bold mb-4">Voluptatibus, neque.</h2>
          <p className="text-white text-justify">
            &nbsp; Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Veniam aliquam enim tenetur deleniti perspiciatis assumenda cum
            possimus pariatur eligendi doloremque quae ipsam quaerat saepe ipsa
            repellat illum ex, culpa consequuntur!.
          </p>
          <a href="/" className="text-red-500 hover:text-red-700">
            Seguir para a página.
          </a>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0 mr-5 ml-2">
          <h2 className="text-xl font-bold mb-4">Adipisicing elit.</h2>
          <p className="text-white text-justify">
            &nbsp; Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolorem ipsa molestias similique cum ullam veritatis assumenda,
            magni nihil, sit nulla saepe. Deserunt itaque ducimus fugiat
            reiciendis ea sapiente magnam assumenda..
          </p>
          <a href="/" className="text-red-500 hover:text-red-700">
            Seguir para a página.
          </a>
        </div>
      </div>
      <div className="text-center mt-10 mb-2">
        <p className="text-gray-200 text-xs">
          © 2023 Archei Software - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;