import React from 'react';
import loginHM from "./../../assets/imgs/LoginHM.png";
const Works: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-start">
        <img className="mt-24 ml-12 w-64 mb-2" src={loginHM} alt="" />
        <p className="dark:text-white mt-2 text-center mb-64 ml-12 ">Legenda login</p>
      </div>
    </>
  );
  
};

export default Works;