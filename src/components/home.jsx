import React from "react";

import imageCard from "../assets/cartao.jpg";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

import Button from "./button";

const Home = () => {
  return (
    <div className="flex flex-row justify-center py-10 gap-10">
      <div>
        <img className="w-96 h-auto" src={imageCard} />
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="flex font-bold text-6xl">
          PAIRBANK
          <br /> A melhor opção.
        </h1>
        <p className="font-semibold text-md py-0">
          Usando nosso app, você pode fazer transferências com zero taxas.
        </p>
        <div className="grid grid-cols-2 gap-4 text-md">
          <p className="flex flex-row items-center justify-start font-semibold gap-2">
            <AiOutlineCheckCircle className="text-orange-500" />
            Sem taxas
          </p>

          <p className="flex flex-row items-center font-semibold  gap-2">
            <AiOutlineCheckCircle className="text-orange-500" />
            Transferências rápidas
          </p>

          <p className="flex flex-row items-center font-semibold  gap-2">
            <AiOutlineCheckCircle className="text-orange-500" />
            Funcionalidade mundial
          </p>

          <p className="flex flex-row items-center font-semibold  gap-2">
            <AiOutlineCheckCircle className="text-orange-500" />
            Rápido atendimento
          </p>
        </div>

        <div className="flex flex-row gap-10 justify-center items-center">
          <Button
            label="Abrir sua conta"
            className="flex flex-row justify-center items-center bg-orange-500 p-3 gap-3 rounded-lg font-semibold text-white  hover:scale-105 transition-transform"
          >
            <AiOutlineArrowRight
              size={20}
              className="transition-transform hover:scale-110"
            />
          </Button>
          <IoLogoGooglePlaystore
            size={40}
            className="text-orange-500  transition-all hover:scale-110 cursor-pointer"
          />
          <FaApple
            size={40}
            className="text-orange-500  transition-all hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
