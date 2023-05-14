import { useState } from 'react';

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  const handleAcceptCookies = () => {
    setCookieConsent(true);
    // Aqui você pode adicionar lógica para gerenciar os cookies
  };

  if (cookieConsent) {
    return null; // Retorna null se o consentimento já foi dado
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
      <p>
        Este site utiliza cookies para melhorar a sua experiência. Clique em "Aceitar" para permitir que o site gerencie os cookies.
      </p>
      <button
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleAcceptCookies}
      >
        Aceitar
      </button>
    </div>
  );
};

export default CookieBanner;

