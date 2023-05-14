import { useState } from "react";

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(() => {
    const consent = document.cookie
      .split("; ")
      .find(row => row.startsWith("cookieConsent="));
    return consent ? consent.split("=")[1] === "true" : false;
  });
  const handleAcceptCookies = () => {
    setCookieConsent(true);
    document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"; // Salva o consentimento do usuário no cookie com uma data de expiração futura
  };

  const handleDeclineCookies = () => {
    // Aqui você pode adicionar lógica para lidar com a recusa dos cookies
  };

  if (cookieConsent) {
    return null; // Retorna null se o consentimento já foi dado
  }

  return (
    <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-[#101010] left-12 bottom-16 dark:border-[#101010] rounded-2xl">
      <h2 className="font-semibold text-gray-800 dark:text-white">
        🍪 Nós usamos cookies!
      </h2>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        Olá, este site utiliza cookies essenciais para garantir seu correto funcionamento e para melhorar seu desenvolvimento. Os cookies de rastreamento serão configurados apenas após o consentimento.{" "}
        <a
          href="#"
          className="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-red-400 dark:text-white hover:text-red-500"
        >
          Deixe eu escolher
        </a>
        .{" "}
      </p>

      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
        Ao fechar esse modal, as configurações padrões serão salvas.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-4 shrink-0">
        <button
          className="text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          onClick={handleAcceptCookies}
        >
          Aceitar
        </button>
        <button
          className="text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          onClick={handleDeclineCookies}
        >
          Não Aceitar
        </button>
      </div>
    </section>
  );
};

export default CookieBanner;