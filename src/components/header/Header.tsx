import React from "react";
import { ShoppingCart, MapPin } from "phosphor-react";
import logo from "../../medias/images/logo.png";

export default function Header() {
  return (
    <header className="w-full lg:px-[166px] sm:py-8 sm:px-14 px-2 py-6 max-[480px]: pb-0 flex max-[480px]:flex-col max-[480px]:gap-6 justify-between items-center">
      <div className="logo ">
        <img
          src={logo}
          className="w-full"
          alt="Logo com um icon de café na esquerda e na direita escrito 'Coffe Delivery'"
        />
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex relative items-center">
          <span
            className="min-w-[143px] max-sm:min-w-[100px] flex   roboto  p-2 bg-purple-light gap-1 cursor-pointer
             hover:opacity-90 text-purple-dark rounded-md text-sm max-sm:text-xs text-center "
            id="set_region"
          >
            <MapPin size={20} weight="fill" className="text-purple" /> Nova
            iguaçu, RJ
          </span>
        </div>
        <span className="icon_cart p-2 bg-yellow-light rounded-md  cursor-pointer ">
          <ShoppingCart size={18} weight="fill" className="text-yellow-dark" />
        </span>
      </div>
    </header>
  );
}
