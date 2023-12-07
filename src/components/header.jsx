import React from "react";
import Button from "./button";

const Header = () => {
  return (
    <header className="flex justify-around flex-row w-full h-28 items-center">
      <h1 className="font-semibold text-4xl text-orange-500 pr-5 cursor-pointer">
        pairbank.
      </h1>
      <div className="flex flex-row justify-center">
        <div className="flex space-x-9 text-lg text-gray-700 font-semibold cursor-pointer ">
          <h1 className="hover:text-orange-500">Benefícios</h1>
          <h1 className="hover:text-orange-500">Conta digital</h1>
          <h1 className="hover:text-orange-500">Suporte</h1>
          <h1 className="hover:text-orange-500">Trabalhe Conosco</h1>
        </div>
      </div>
      <div className="flex gap-8">
        <Button
          className="bg-orange-500 p-3 rounded-lg font-semibold text-white hover:bg-orange-600 transition duration-300"
          label="Entrar"
        />
        <Button
          className="p-3 rounded-lg font-semibold text-orange-500 hover:text-orange-800 transition duration-300"
          label="Criar conta"
        />
      </div>
    </header>
  );
};

export default Header;
