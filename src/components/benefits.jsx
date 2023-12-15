import React from "react";

import { GoCreditCard } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { MdSpeed } from "react-icons/md";

const Benefits = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-gray-200">
      <h1 className="font-bold text-xl py-6 text-orange-600">#VANTAGENS</h1>
      <p className="font-semibold text-3xl">
        Por que usar <span className="text-orange-600">PairBank</span>?
      </p>
      <div className="display grid grid-cols-3 gap-8 pb-10">
        <div className="flex flex-col gap-5 py-14 px-10 rounded-md bg-white">
          <GoCreditCard size={30} className="text-orange-600" />
          <h1 className="font-semibold text-lg">Cartão PairBank</h1>
          <p className="w-56 font-semibold">
            Cartão de crédito e débito exclusivo PairBank para clientes, sem
            nenhuma taxa.
          </p>
          <h2 className="font-bold mt-11  underline cursor-pointer text-orange-600">
            VEJA AS OPÇÕES
          </h2>
        </div>
        <div className="flex flex-col gap-5 py-14 px-10 rounded-md bg-white">
          <BiSupport size={30} className="text-orange-600" />
          <h1 className="font-semibold text-lg">Atendimento 24h</h1>
          <p className="w-56 font-semibold">
            O nosso atendimento é 24h, todos os dias para clientes PairBank
            através do nosso chat e do nosso canal de comunicações.
          </p>
          <h2 className="font-bold underline cursor-pointer text-orange-600">
            VEJA AS OPÇÕES
          </h2>
        </div>
        <div className="flex flex-col gap-5 py-14 px-10 rounded-md bg-white">
          <GrMoney size={30} className="text-orange-600" />
          <h1 className="font-semibold text-lg">Investimentos</h1>
          <p className="w-56 font-semibold">
            Utilizando nosso sistema de investimento, você pode investir aonde
            quiser e deixar rendendo na sua conta com 110% do CDI.
          </p>
          <h2 className="font-bold mt-5 underline cursor-pointer text-orange-600">
            SAIBA MAIS
          </h2>
        </div>
        <div className="flex flex-col gap-5 py-14 px-10 rounded-md bg-white">
          <MdOutlineSecurity size={30} className="text-orange-600" />
          <h1 className="font-semibold text-lg">Segurança</h1>
          <p className="w-56 font-semibold">
            Nosso aplicativo conta com diversos testes de identidade e
            autenticação de dois fatores, mantendo a segurança e a privacidade
            do usuário em primeiro lugar.
          </p>
          <h2 className="font-bold mt-2 underline cursor-pointer text-orange-600">
            SAIBA MAIS
          </h2>
        </div>
        <div className="flex flex-col gap-5 py-14 px-10 rounded-md bg-white">
          <HiOutlineReceiptTax size={30} className="text-orange-600" />
          <h1 className="font-semibold text-lg">Descontos</h1>
          <p className="w-56 font-semibold">
            Clientes PairBank tem descontos exclusivos em diversas plataformas
            de shopping online.
          </p>
          <h2 className="font-bold mt-14 underline cursor-pointer text-orange-600">
            VEJA COMO
          </h2>
        </div>
        <div className="flex flex-col gap-5 py-14 px-10 rounded-md bg-white">
          <MdSpeed size={30} className="text-orange-600" />
          <h1 className="font-semibold text-lg">Velocidade</h1>
          <p className="w-56 font-semibold">
            As transações feitas dentro da nossa plataforma contém a tecnologia
            mais rápida do mercado para não deixar ninguém esperando.
          </p>
          <h2 className="font-bold mt-10 underline cursor-pointer text-orange-600">
            VEJA AS OPÇÕES
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
