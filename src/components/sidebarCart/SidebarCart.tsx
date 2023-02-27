import React, { useContext } from "react";
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash,
  WarningCircle,
  X,
} from "phosphor-react";
import { DadosContext } from "../../context/ContextApp";

export default function SidebarCart() {
  const {
    cart,
    handleClickPlus,
    handleClickMinus,
    openSidebarCart,
    setOpenSidebarCart,
    handleRemoveItemCard,
  } = useContext(DadosContext);
  console.log(openSidebarCart);

  return (
    <div
      className={` w-full max-w-[368px] max-sm:max-w-full max-h-screen overflow-y-scroll bg-base-white fixed top-0 right-0 z-50 p-6 px-4  transition-all ${
        openSidebarCart ? "translate-x-0" : "translate-x-[100%]"
      } `}
    >
      <span
        className="absolute top-0 right-0 m-6 cursor-pointer hover:scale-95 transition-all"
        onClick={() => {
          setOpenSidebarCart(false);
        }}
      >
        <X size={26} weight="fill" className="text-purple" />
      </span>
      <div className="content">
        <span className="title text-2xl roboto font-extrabold text-purple flex items-center gap-2">
          Carrinho
          <ShoppingCart size={24} weight="fill" />
        </span>

        <div className="products mt-8 flex flex-col justify-center gap-3">
          {cart.map((product, i) => (
            <div className="product w-full py-2 px-1 bg-base-card flex gap-5 rounded-md">
              <div className="img ">
                <img src={product.image} className="w-full" alt="" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="top w-full flex justify-between items-center roboto ">
                  <span className="text-base max-sm:text-sm">
                    {product.name}
                  </span>
                  <span className="text-base max-sm:text-sm font-bold text-base-text">
                    R${product.value}
                  </span>
                </div>
                <div className="flex gap-2">
                  <div
                    className="bg-base-button max-w-[72px] max-h-[38px] rounded-md
                 flex justify-center items-center p-2"
                  >
                    <span
                      onClick={(e) => {
                        handleClickMinus(product.id);
                      }}
                      className="text-purple text-lg font-semibold cursor-pointer"
                    >
                      <Minus size={16} weight="fill" />
                    </span>
                    <input
                      type="number"
                      name="quantidade"
                      id="number"
                      min={1}
                      value={product.quantCart}
                      className="bg-transparent w-full text-center"
                    />
                    <span
                      onClick={(e) => {
                        handleClickPlus(product.id);
                      }}
                      className="text-purple text-lg font-semibold cursor-pointer"
                    >
                      <Plus size={16} weight="fill" />
                    </span>
                  </div>
                  <span
                    onClick={() => handleRemoveItemCard(product.id)}
                    className="text-xs text-base-text roboto bg-base-button  rounded-md
                 flex justify-center items-center p-2 cursor-pointer hover:opacity-95 transition-all hover:bg-base-hover"
                  >
                    <Trash size={16} weight="light" />
                    REMOVER
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${cart.length > 0 ? "block" : "hidden"} buttonArea mt-14`}
        >
          <button className="w-full px-2 py-3 bg-yellow-dark text-base-white roboto font-bold uppercase rounded-md text-sm">
            Finalizar compras
          </button>
        </div>

        <div
          className={`${
            cart.length === 0 ? "block" : "hidden"
          }  w-full flex justify-center items-center flex-col py-6 text-2xl roboto font-bold gap-2 text-yellow-dark`}
        >
          <WarningCircle size={54} weight="light" />
          <span>Vazio</span>
        </div>
      </div>
    </div>
  );
}
