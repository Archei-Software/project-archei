import { Link } from "react-router-dom";
const HeroMain = () => {
  return (
    <>
      <div
        className="w-full bg-center bg-cover h-[38rem] "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-[#000000]/80">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl mb-10">
              Desenvolva seu <span className="text-red-600">Site</span> conosco.
            </h1>
            <Link
              to="/pt-br/contato"
              className="px-3 py-2 duration-200 text-white hover:bg-red-600 hover:text-black dark:hover:text-black font-semibold border-2 border-red-600 mr-4"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HeroMain;
