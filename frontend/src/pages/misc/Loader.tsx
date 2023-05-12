import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectOnLoad() {
    const navigate = useNavigate();
  
    useEffect(() => {
      navigate('/pt-br');
    });
  
    return null;
  }

const Loader = () => {
  return (
    <>
    {RedirectOnLoad()}
    </>
  );
};

export default Loader;