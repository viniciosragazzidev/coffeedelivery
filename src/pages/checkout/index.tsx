import React, { useState, useContext, useEffect } from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import { DadosContext } from "../../context/ContextApp";
import { NavLink, useNavigate } from "react-router-dom";

export default function Checkout() {
  const [metSelect, setMetSelect] = useState("");
  const { cart, handleClickPlus, handleClickMinus, handleRemoveItemCard } =
    useContext(DadosContext);
  const handleSelectMetodo = (type: string) => {
    setMetSelect(type);
    console.log(type);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart]);

  const totalValue = cart
    .map((item) => parseFloat(item.value) * item.quantCart) // converte o valor de string para número
    .reduce((acc, currentValue) => acc + currentValue, 0);

  const [cepValue, setCepValue] = useState("");
  const [ruaValue, setRuaValue] = useState("");
  const [numeroValue, setNumeroValue] = useState("");
  const [complemento, setComplemento] = useState("");

  const [send, setSend] = useState(false);

  const handleConfirm = () => {
    if (!cepValue || !ruaValue || !numeroValue || !metSelect) {
      setSend(true);
      return;
    } else {
      setSend(false);
      alert('enviado')
      return;
    }

    // Restante da lógica para confirmar o pedido
  };

  return (
    <div className="w-full xl:px-[70px] max-2_xl:px-[60px]    max-xl:px-[40px] max-lg:px-[50px]  max-xs:px-4   py-24  max-[480px]:py-10 ">
      <div className="flex gap-8 max-lg:flex-col">
        <div className="formArea text-black w-full  lg:max-w-[640px] flex flex-col gap-4 flex-1 ">
          <h2 className="baloo text-lg">Complete seu pedido</h2>

          <div className="form w-full  bg-base-card p-10 max-xs:px-3 rounded-md">
            <header className="flex items-start gap-2">
              <MapPinLine
                size={22}
                weight="light"
                className="text-yellow-dark"
              />
              <div className="text">
                <span className="roboto text-base-subtitle">
                  Endereço de Entrega
                </span>
                <p className="text-sm roboto text-base-text">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </header>

            <form className="mt-8 flex flex-col gap-4">
              <div className="input_cep relative">
                <input
                  type="number"
                  name="cep"
                  id="cep"
                  onChange={(e) => {
                    setCepValue(e.target.value);
                  }}
                  value={cepValue}
                  required
                  placeholder="CEP"
                  className="w-full max-w-[200px] p-3 placeholder:text-base-label text-base-text roboto bg-base-input border-base-button border rounded focus:outline-none focus:border-yellow-dark"
                />
                <span
                  className={`absolute left-0 bottom-[-15px] text-xs text-red-500 ${
                    send && cepValue.length === 0 ? "block" : "hidden"
                  }`}
                >
                  Faltam dados obigatórios.
                </span>
              </div>

              <div className="rua relative">
                <input
                  type="text"
                  name="rua"
                  onChange={(e) => {
                    setRuaValue(e.target.value);
                  }}
                  value={ruaValue}
                  id="rua"
                  required
                  placeholder="Rua"
                  className="w-full  p-3 placeholder:text-base-label text-base-text roboto bg-base-input border-base-button border rounded focus:outline-none focus:border-yellow-dark"
                />
                <span
                  className={`absolute left-0 bottom-[-15px] text-xs text-red-500 ${
                    send && ruaValue.length === 0 ? "block" : "hidden"
                  }`}
                >
                  Faltam dados obigatórios.
                </span>
              </div>

              <div className="input_box flex items-center gap-3 max-sm:flex-col">
                <div className="relative">
                  <input
                    type="number"
                    name="numero"
                    id="numero"
                    onChange={(e) => {
                      setNumeroValue(e.target.value);
                    }}
                    value={numeroValue}
                    required
                    placeholder="Numero"
                    className="w-full max-w-[200px] p-3 max-sm:max-w-none placeholder:text-base-label text-base-text roboto bg-base-input border-base-button border rounded focus:outline-none focus:border-yellow-dark"
                  />
                  <span
                    className={`absolute left-0 bottom-[-25px] text-xs text-red-500  ${
                      send && numeroValue.length === 0 ? "block" : "hidden"
                    }`}
                  >
                    Faltam dados obigatórios.
                  </span>
                </div>

                <div className="w-full relative">
                  <span
                    className={`absolute roboto italic text-xs text-base-label right-0 top-[35%] pr-3 ${
                      complemento.length > 0 ? "hidden" : ""
                    }`}
                  >
                    Opcional
                  </span>
                  <input
                    type="text"
                    name="complemento"
                    id="complemento"
                    value={complemento}
                    onChange={(e) => {
                      setComplemento(e.target.value);
                    }}
                    placeholder="Complemento"
                    className=" w-full p-3 placeholder:text-base-label text-base-text roboto bg-base-input border-base-button border rounded focus:outline-none focus:border-yellow-dark"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="form w-full  bg-base-card p-10 max-xs:px-3 mt-3 flex flex-col gap-8">
            <header className="flex items-start gap-2">
              <CurrencyDollar
                size={22}
                weight="light"
                className="text-purple"
              />
              <div className="text">
                <span className="roboto text-base-subtitle">Pagamento</span>
                <p className="text-sm roboto text-base-text">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar{" "}
                </p>
              </div>
            </header>
            <div className="buttons grid grid-cols-3  max-sm:grid-cols-1  max-[740px]:grid-cols-2   gap-3 relative ">
              <span
                onClick={() => {
                  handleSelectMetodo("credito");
                }}
                className={`button flex  items-center p-4 bg-base-button rounded-md gap-3 hover:bg-base-hover transition-all cursor-pointer ${
                  metSelect === "credito"
                    ? "bg-purple-light border-purple border"
                    : ""
                } `}
              >
                <CreditCard size={16} weight="light" className="text-purple" />
                <span className="roboto uppercase text-xs text-base-text">
                  Cartão de crédito
                </span>
              </span>
              <span
                onClick={() => {
                  handleSelectMetodo("debito");
                }}
                className={`button flex  items-center p-4 bg-base-button rounded-md gap-3 hover:bg-base-hover transition-all cursor-pointer ${
                  metSelect === "debito"
                    ? "bg-purple-light border-purple border"
                    : ""
                } `}
              >
                <Bank size={16} weight="light" className="text-purple" />
                <span className="roboto uppercase text-xs text-base-text">
                  cartão de débito
                </span>
              </span>
              <span
                onClick={() => {
                  handleSelectMetodo("dinheiro");
                }}
                className={`button flex  items-center p-4 bg-base-button rounded-md gap-3 hover:bg-base-hover transition-all cursor-pointer ${
                  metSelect === "dinheiro"
                    ? "bg-purple-light border-purple border"
                    : ""
                } `}
              >
                <Money size={16} weight="light" className="text-purple" />
                <span className="roboto uppercase text-xs text-base-text">
                  Dinheiro
                </span>
              </span>
              <span
                className={`absolute left-0 bottom-[-20px] text-xs text-red-500 ${
                  send && metSelect.length === 0 ? "block" : "hidden"
                }`}
              >
                Selecione um método de pagamento
              </span>
            </div>
          </div>
        </div>

        <div className="cartValue w-full lg:max-w-[350px] xl:max-w-[520px]  flex flex-col  ">
          <h2 className="baloo text-lg mb-4">Cafés selecionados</h2>
          <div className=" w-full bg-base-card   p-10 lg:p-5 max-xs:px-3 rounded-md max-lg:p-5  max-h-[360px] overflow-y-scroll ">
            <div className="products flex flex-col justify-center gap-3   ">
              {cart.map((product, i) => (
                <div className="product w-full py-3 border-b-2 border-b-base-button  bg-base-card flex gap-5 rounded-md">
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
                        className="bg-base-button max-w-[80px] max-h-[38px] rounded-md
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
                          className="bg-transparent w-full text-right"
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
          </div>
          <div className="infos_cart py-6 px-10 flex flex-col gap-3 bg-base-card">
            <div className="flex justify-between">
              <span className="roboto  text-sm text-base-text">
                Total de itens
              </span>
              <span className="roboto  text-sm text-base-text">
                R$ {totalValue.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="roboto  text-sm text-base-text">Entrega</span>
              <span className="roboto  text-sm text-base-text">
                R$ {((cart.length / 3) * 3.5).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="roboto   text-xl text-base-subtitle font-extrabold">
                Total
              </span>
              <span className="roboto   text-xl text-base-subtitle font-extrabold">
                R$
                {(totalValue + Math.floor((cart.length / 3) * 3.5)).toFixed(2)}
              </span>
            </div>
            <span
              onClick={() => {
                handleConfirm();
              }}
              className="w-full flex justify-center px-2 py-3 bg-yellow hover:bg-yellow-dark transition-all cursor-pointer text-base-white roboto font-bold uppercase rounded-md text-sm"
            >
              Confirmar pedido
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
