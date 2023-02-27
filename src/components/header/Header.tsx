import React, { useContext, useEffect } from "react";
import { ShoppingCart, MapPin } from "phosphor-react";
import logo from "../../medias/images/logo.png";
import { DadosContext } from "../../context/ContextApp";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const { cart, openSidebarCart, setOpenSidebarCart } =
    useContext(DadosContext);

  const handleButtonCart = () => {
    if (openSidebarCart) {
      setOpenSidebarCart(false);
    } else {
      setOpenSidebarCart(true);
    }
  };
  return (
    <header className={`w-full fixed max-[480px]:relative z-40 xs:p-6 bg-base-white lg:px-[166px] sm:py-8 sm:pb-4 sm:px-14 px-2 py-6 max-[480px]:py-6 pb-0 flex max-[480px]:px-4 max-[480px]:gap-6 justify-between items-center ${location.pathname != '/' ? 'relative' : 'fixed'}`}>
      <NavLink to={"/"} className="logo ">
        <img
          src={logo}
          className="w-full"
          alt="Logo com um icon de café na esquerda e na direita escrito 'Coffe Delivery'"
        />
      </NavLink>
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
        <span
          onClick={() => {
            handleButtonCart();
          }}
          className={`icon_cart p-2 bg-yellow-light rounded-md  cursor-pointer relative max-xs:fixed max-xs:left-0  max-xs:bottom-0 max-xs:m-4 ${
            location.pathname != "/" ? "hidden" : "block"
          }`}
        >
          {cart.length > 0 ? (
            <span className="quantCart bg-yellow-dark rounded-full text-base-white w-5 h-5 text-xs flex justify-center items-center">
              {cart.length}
            </span>
          ) : null}
          <ShoppingCart size={18} weight="fill" className="text-yellow-dark" />
        </span>
      </div>
    </header>
  );
}
