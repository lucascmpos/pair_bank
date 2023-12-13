import React from "react";

import imageCard from "../assets/cartao.jpg";
import imageCel from "../assets/cel.png";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

import { MdOutlineAttachMoney } from "react-icons/md";
import { FiCreditCard, FiSmartphone } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";

import Button from "./button";

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-row justify-center py-40 gap-20">
        <div>
          <img className="w-12/12 h-auto" src={imageCard} />
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="flex font-bold text-6xl">
            PAIRBANK
            <br /> A melhor opção.
          </h1>
          <p className="font-semibold text-md py-0">
            Usando nosso app, você pode fazer transferências <br /> e pagar suas
            contas com zero taxas.
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
      <div className="flex flex-row justify-center ">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-semibold py-8">
              Abra sua conta gratuitamente de forma
              <span className="text-orange-600"> rápida</span>!
            </h1>
            <p className="flex text-lg font-semibold text-gray-600">
              Aqui suas transações são na velocidade da luz, sem demora,
              <br />
              utilizando seu método de pagamento preferido.
            </p>
          </div>
          <div className="flex flex-row items-center just gap-10 border-b border-gray-200 py-5">
            <MdOutlineAttachMoney
              size={45}
              className="bg-gray-200 text-orange-600 rounded-md p-1 transition-transform hover:scale-110"
            />
            <div>
              <h1 className="font-semibold text-xl ">
                No pairbank seu dinheiro rende mais
              </h1>
              <p className="font-semibold text-gray-600">
                Até 110% de rendimento no CDI e retire quando quiser.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center just gap-10 border-b border-gray-200 py-5">
            <FiSmartphone
              size={45}
              className="bg-gray-200 text-orange-600 rounded-md p-2 transition-transform hover:scale-110"
            />
            <div>
              <h1 className="font-semibold text-xl ">
                Conta digital totalmente gratuíta
              </h1>
              <p className="font-semibold text-gray-600">
                Toda praticidade na palma da sua mão!
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center just gap-10 border-b border-gray-200 py-5">
            <div>
              <FiCreditCard
                size={45}
                className="bg-gray-200 text-orange-600 rounded-md p-2 transition-transform hover:scale-110"
              />
            </div>
            <div>
              <h1 className="font-semibold text-xl">
                Cartão de crédito sem anuidade
              </h1>
              <p className="font-semibold text-gray-600">
                Zero taxas de serviços e de uso.
              </p>
            </div>
          </div>
        </div>
        <img className="w-2/6 h-auto" src={imageCel} />
      </div>
    </div>
  );
};

export default Home;
