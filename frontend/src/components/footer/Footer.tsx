import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinkedin, SiGithub } from "react-icons/si";
import logo from "./../../assets/imgs/logoMin.png";

const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-[#101010] text-white pt-12 border-t border-t-gray-200 dark:border-t-[#2e2e2e]">
      <div className="container mx-auto flex flex-col md:flex-row ">
        <div className="flex flex-col items-center mb-4 lg:mr-64 mr-32 lg:ml-0 ml-44">
          <img src={logo} alt="Logo da Archei" className="w-20 mb-4 " />
          <div className="md:w-1/3 flex justify-center">
            <a
              href="https://github.com/Archei-Software"
              className="mx-4"
              target="_blank"
            >
              <SiGithub size={24} className="hover:text-red-600 text-black dark:text-white" />
            </a>
            <a href="https://linkedin.com/" className="mx-4" target="_blank">
              <SiLinkedin size={24} className="hover:text-red-600 text-black dark:text-white" />
            </a>

            <a
              href="https://twitter.com/archeisoftware"
              className="mx-4"
              target="_blank"
            >
              <FaTwitter size={24} className="hover:text-red-600 text-black dark:text-white" />
            </a>
            <a
              href="https://www.instagram.com/ArcheiSoftware/"
              className="mx-4"
              target="_blank"
            >
              <FaInstagram size={24} className="hover:text-red-600 text-black dark:text-white" />
            </a>
          </div>
        </div>
        <div className="row md:text-left text-center -mb-10 -mx-4 hidden lg:flex">
        <div className=" w-full px-4">
            <h2 className="font-extrabold text-black dark:text-white text-3xl mb-3">Carreiras</h2>
            <section className="mb-10 flex flex-col justify-center items-start">
              <a
                href="/"
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-black dark:text-white dark:hover:text-red-500 hover:text-red-500 duration-200 gap-x-2 sm:w-auto font-semibold rounded-lg mr-2 mt-0"
              >
                <span className="font-bold text-lg">Acessar Link</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 rotate-180 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </a>
            </section>
          </div>
          <div className=" w-full px-4">
            <h2 className="font-extrabold text-black dark:text-white text-3xl mb-3">Parceiros</h2>
            <section className="mb-10 flex flex-col justify-center items-start">

              <a
                href="/"
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 duration-200 gap-x-2 sm:w-auto font-semibold rounded-lg mr-2 mt-0"
              >
                <span className="font-bold text-lg">Acessar Link</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 rotate-180 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </a>
            </section>
          </div>
          <div className=" w-full px-4">
            <h2 className="font-extrabold text-black dark:text-white text-3xl mb-3">Contato</h2>
            <section className="mb-10 flex flex-col justify-center items-start">
              <a
                href="/"
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 duration-200 gap-x-2 sm:w-auto font-semibold rounded-lg mr-2 mt-0"
              >
                <span className="font-bold text-lg">Acessar Link</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 rotate-180 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </a>
            </section>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:ml-[30%] sm:ml-0  mt-10 mb-2 border-t border-[#2e2e2e] lg:w-[50rem] sm:w-0">
        <p className="text-gray-800 dark:text-gray-200  text-xs mt-2">
          © 2023 Archei Software - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
