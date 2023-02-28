import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import React, { useContext } from "react";
import { DadosContext } from "../../context/ContextApp";
import Illustration from "../../medias/images/Illustration.png";
export default function Success() {
  const {
    metSelect,

    cepValue,

    ruaValue,

    numeroValue,

    complemento,
  } = useContext(DadosContext);

  return (
    <div className="grid lg:grid-cols-2 max-lg:gap-5  xl:px-[70px] max-2_xl:px-[60px]  justify-items-center   max-xl:px-[40px] max-lg:px-[50px]  max-xs:px-4   py-16  max-[480px]:py-10">
      <div className="max-lg:w-full max-w-xl ">
        <h1 className="baloo text-3xl text-yellow-dark">
          Uhu! Pedido confirmado
        </h1>
        <p className="roboto text-lg text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <div className="card flex flex-col gap-8 mt-10 p-10 border border-yellow rounded-tr-3xl rounded-bl-3xl">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-purple text-base-white rounded-full">
              <MapPin size={18} weight="fill" />
            </span>
            <div className="roboto text-base-text flex flex-col">
              <span className="">
                Entrega em{" "}
                <span className="font-bold">
                  {ruaValue}, {numeroValue}
                </span>
                <br />
                {complemento}
              </span>
              <span></span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="p-2 bg-yellow text-base-white rounded-full">
              <Timer size={18} weight="fill" />{" "}
            </span>
            <div className="roboto text-base-text flex flex-col">
              <span className="">Previsão de entrega</span>
              <div className="font-bold">20 min - 30 min</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="p-2 bg-yellow text-base-white rounded-full">
              <CurrencyDollar size={18} weight="fill" />
            </span>
            <div className="roboto text-base-text flex flex-col">
              <span className="">Pagamento na entrega</span>
              <div className="font-bold">{metSelect === 'credito' ? 'Cartão de Crédito' : metSelect === 'debito' ? 'Cartão de Débito' : 'Dinheiro'}</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center">
        <img src={Illustration} alt="" />
      </div>
    </div>
  );
}
