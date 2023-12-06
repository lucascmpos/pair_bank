import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center flex-row w-full h-28 items-center bg-red-50">
      <h1 className=" font-semibold text-4xl text-orange-500 pr-5">
        pairbank.
      </h1>
      <div className="flex flex-row justify-center">
        <div className="flex space-x-9 text-lg text-gray-700 font-semibold">
          <h1>Benefícios</h1>
          <h1>Conta digital</h1>
          <h1>Suporte</h1>
          <h1>Trabalhe Conosco</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
