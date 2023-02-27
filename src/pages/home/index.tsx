import React from "react";
import coffeeTop from "../../medias/images/coffeeTop.png";
import Header from "../../components/header/Header";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeCards from "../../components/coffeCard/CoffeCard";
export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <section className="hero  lg:px-[166px]   sm:px-14 px-2 flex py-24 max-[480px]:py-10 max-[970px]:flex max-[970px]:flex-col ">
        <div className="content flex-1 max-sm:px-4 max-[480px]:text-center">
          <h1 className="text-base-title font-extrabold baloo text-5xl max-sm:text-4xl ">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="pt-4 roboto text-[20px] max-sm:text-sm pr-20 max-[480px]:pr-0">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="itens grid max-[480px]:grid-cols-1 grid-cols-2 mt-16 roboto gap-5 justify-items-center">
            <div className="item flex gap-3 items-center ">
              <span className="p-[10px] rounded-full bg-yellow-dark">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  className="text-base-white"
                />
              </span>
              <p className="text-base-text text-base max-sm:text-sm leading-[130%] tracking-wide">
                Compra simples e segura
              </p>
            </div>
            <div className="item flex gap-3 items-center ">
              <span className="p-[10px] rounded-full bg-base-text">
                <Package size={16} weight="fill" className="text-base-white" />
              </span>
              <p className="text-base-text text-base max-sm:text-sm  leading-[130%] tracking-wide">
                Compra simples e segura
              </p>
            </div>
            <div className="item flex gap-3 items-center ">
              <span className="p-[10px] rounded-full bg-yellow">
                <Timer size={16} weight="fill" className="text-base-white" />
              </span>
              <p className="text-base-text text-base max-sm:text-sm leading-[130%] tracking-wide">
                Compra simples e segura
              </p>
            </div>
            <div className="item flex gap-3 items-center ">
              <span className="p-[10px] rounded-full bg-purple-dark">
                <Coffee size={16} weight="fill" className="text-base-white" />
              </span>
              <p className="text-base-text text-base max-sm:text-sm leading-[130%] tracking-wide">
                Compra simples e segura
              </p>
            </div>
          </div>
        </div>
        <div className="img max-[970px]:flex max-[970px]:w-full max-[970px]:justify-center max-[970px]:mt-14">
          <img
            className="w-full  max-[1280px]:max-w-[380px] "
            src={coffeeTop}
            alt="Imagem de fundo amarelo com um copo de café e grãos de café em volta"
          />
        </div>
      </section>
      <section className="coffes xl:px-[126px]  sm:px-14 max-[970px]:pt-2 max-sm:px-6 flex flex-col  py-24">
        <h1 className="baloo font-extrabold text-[32px] text-base-title">
          Nossos Cafés
        </h1>

        <div className="list-coffes pt-8 ">
          <CoffeCards />
        </div>
      </section>
    </div>
  );
}
