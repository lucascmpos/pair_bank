import React from "react";

import imageCard2 from "../assets/card.png";
import Button from "./button";

const Feedbacks = () => {
  return (
    <div className="flex flex-col gap-36">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-xl text-orange-600 py-10">#INDICAÇÕES</h2>
        <h1 className="font-semibold text-4xl">
          Veja o que falam sobre nosso banco.
        </h1>
      </div>
      <div className="flex flex-row justify-evenly pl-40">
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl border-l-2 pl-2 border-orange-600">
            MARK BERGZUCK
          </h3>
          <p className="font-semibold text-xl w-80">
            "Sou realmente muito fã desse banco digital. Meu uso nele é tão
            rápido que nunca mais tive dor de cabeça usando outro banco."
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl border-l-2 pl-2 border-orange-600">
            ELON DUSK
          </h3>
          <p className="font-semibold text-xl w-80">
            "PairBank é líder de mercado. As funcionalidades e velocidade de
            como funciona as coisas dentro dessa plataforma são espetaculares."
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl border-l-2 pl-2 border-orange-600">
            STEVE POPS
          </h3>
          <p className="font-semibold text-xl w-80">
            "Nunca mais tive nenhuma reclamação dos meus clientes depois de
            indicar esse banco pra eles. Ele é rápido demais, e ainda não cobra
            taxas."
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="font-bold text-xl text-orange-600 py-10">#CARTÃO</h2>
        <h1 className="font-semibold text-4xl">
          O melhor cartão para suas melhores escolhas.
        </h1>
        <h2 className="font-semibold text-2xl w-1/3">
          Encontre o cartão de crédito ideal para suas necessidades financeiras.
          Para grandes compras ou para o dia a dia, temos a opção perfeita que
          se alinha ao seu estilo.
        </h2>
        <img className="w-2/6 h-auto" src={imageCard2} />
        <div className="flex flex-row gap-4 mb-10">
          <Button
            className="flex justify-center items-center bg-orange-500 py-5 px-7 rounded-lg font-semibold text-white hover:bg-orange-600 transition duration-300"
            label="Abrir sua conta"
          />
          <Button
            className="flex justify-center items-center border-4 border-gray-200 py-5 px-7 rounded-lg font-semibold  hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300"
            label="Ver cartões"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
