import React, { useEffect, useState, useContext } from "react";
import americano from "../../medias/images/americano.png";
import arabe from "../../medias/images/arabe.png";
import cafeComLeite from "../../medias/images/cafeComLeite.png";
import cafeGelado from "../../medias/images/cafeGelado.png";
import capuccino from "../../medias/images/capuccino.png";
import chocolate from "../../medias/images/chocolate.png";
import cubano from "../../medias/images/cubano.png";
import expresso from "../../medias/images/expresso.png";
import expressoCremoso from "../../medias/images/expressoCremoso.png";
import havaiano from "../../medias/images/havaiano.png";
import irlandes from "../../medias/images/irlandes.png";
import latte from "../../medias/images/latte.png";
import machiato from "../../medias/images/machiato.png";
import mochaccino from "../../medias/images/mochaccino.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { DadosContext } from "../../context/ContextApp";

export interface CoffeesType {
  id: number;
  image: string;
  type: string[];
  name: string;
  desc: string;
  value: string;
  quantCart: number;
}

const coffees = [
  {
    id: Math.floor(Math.random() * 9999),

    image: expresso,
    type: ["tradicional"],
    name: "Expresso Tradicional",
    desc: "O tradicional café feito com água quente e grãos moídos",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: americano,
    type: ["tradicional"],
    name: "Expresso Americano",
    desc: "Expresso diluído, menos intenso que o tradicional",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: expressoCremoso,
    type: ["tradicional"],
    name: "Expresso Cremoso",
    desc: "Café expresso tradicional com espuma cremosa",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: cafeGelado,
    type: ["tradicional", "gelado"],
    name: "Expresso Gelado",
    desc: "Bebida preparada com café expresso e cubos de gelo",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: cafeComLeite,
    type: ["tradicional", "com-leite"],
    name: "Café com Leite",
    desc: "Meio a meio de expresso tradicional com leite vaporizado",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: latte,
    type: ["tradicional", "com leite"],
    name: "Latte",
    desc: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: capuccino,
    type: ["tradicional", "com leite"],
    name: "Capuccino",
    desc: "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: machiato,
    type: ["tradicional", "com leite"],
    name: "Macchiato",
    desc: "Café expresso misturado com um pouco de leite quente e espuma",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: mochaccino,
    type: ["tradicional", "com leite"],
    name: "Mocaccino",
    desc: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: chocolate,
    type: ["especial"],
    name: "Chocolate Quente",
    desc: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: cubano,
    type: ["especial", "alcoólico", "gelado"],
    name: "Cubano",
    desc: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: havaiano,
    type: ["especial"],
    name: "Havaiano",
    desc: "Bebida adocicada preparada com café e leite de coco",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: irlandes,
    type: ["especial", "alcoólico"],
    name: "Irlandês",
    desc: "Bebida com café, whisky e chantilly",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: latte,
    type: ["tradicional", "com leite"],
    name: "Latte",
    desc: "Uma dose de café com o dobro de leite e espuma cremosa",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: machiato,
    type: ["tradicional", "com leite"],
    name: "Macchiato",
    desc: "Café expresso misturado com um pouco de leite quente e espuma",
    value: "9,90",
    quantCart: 1,
  },
  {
    id: Math.floor(Math.random() * 9999),
    image: mochaccino,
    type: ["tradicional", "com leite"],
    name: "Mocaccino",
    desc: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: "9,90",
    quantCart: 1,
  },
];

export default function CoffeCards() {
  const {
    cart,
    setCart,
    newCoffees,
    setNewCoffees,
    handleClickPlus,
    handleClickMinus,
  } = useContext(DadosContext);

  useEffect(() => {
    setNewCoffees(coffees);
  }, []);

  const handleCart = (id: number) => {
    const cartTemp = [...cart];
    const item = newCoffees.find((cofe) => cofe.id === id);
    const cartI = cartTemp.find((cofe) => cofe.id === id);
    if (item && item.name != cartI?.name) {
      cartTemp.push(item);
    }

    // atualize o estado do carrinho com a nova matriz
    setCart(cartTemp);
  };
  return (
    <div className="w-full grid grid-cols-4  max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-[480px]:justify-items-center gap-8 ">
      {newCoffees.map((coffee, i) => {
        return (
          <div
            key={i}
            className="card px-4 py-5 bg-base-card text-center min-w-[256px] max-[480px]:max-w-[280px]"
          >
            <div className="image w-full flex justify-center relative top-[-40px]">
              <img
                src={coffee.image}
                className=""
                alt={`Foto de um café ${coffee.name}`}
              />
            </div>
            <div className="types relative top-[-20px] flex gap-2 justify-center text-center items-center">
              {coffee.type.map((type, i) => (
                <span
                  key={i}
                  className="roboto text-[10px] text-yellow-dark uppercase font-extrabold px-2 py-1 bg-yellow-light rounded-full"
                >
                  {type}
                </span>
              ))}
            </div>
            <h3 className="baloo font-bold text-[20px]">{coffee.name}</h3>
            <p className="roboto text-sm mt-2 text-base-label">{coffee.desc}</p>

            <div className="footer flex justify-around items-center mt-8">
              <p className="text-base-text flex items-center gap-1 ">
                R${" "}
                <span className="text-2xl baloo font-extrabold">
                  {coffee.value}
                </span>
              </p>
              <div className="flex gap-2">
                <div
                  className="bg-base-button max-w-[72px] max-h-[38px] rounded-md
                 flex justify-center items-center p-2"
                >
                  <span
                    onClick={(e) => {
                      handleClickMinus(coffee.id);
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
                    value={coffee.quantCart}
                    className="bg-transparent w-full text-center"
                  />
                  <span
                    onClick={(e) => {
                      handleClickPlus(coffee.id);
                    }}
                    className="text-purple text-lg font-semibold cursor-pointer"
                  >
                    <Plus size={16} weight="fill" />
                  </span>
                </div>

                <span
                  className="p-[10px] bg-purple-dark hover:bg-purple transition-colors cursor-pointer rounded-md"
                  onClick={() => {
                    handleCart(coffee.id);
                  }}
                >
                  <ShoppingCart
                    size={18}
                    weight="fill"
                    className="text-base-white"
                  />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
