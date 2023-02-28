import { createContext, useState } from "react";
import { CoffeesType } from "../components/coffeCard/CoffeCard";

interface ContextType {
  cart: CoffeesType[];
  setCart: (cart: CoffeesType[]) => void;
  newCoffees: CoffeesType[];
  setNewCoffees: (newCoffees: CoffeesType[]) => void;
  showCart: boolean;
  setShowCart: (showCart: boolean) => void;
  openSidebarCart: boolean;
  setOpenSidebarCart: (showCart: boolean) => void;
  handleClickPlus: (id: number) => void;
  handleClickMinus: (id: number) => void;
  handleRemoveItemCard: (id: number) => void;
  metSelect: string;
  setMetSelect: (metSelect: string) => void;
  cepValue: string;
  setCepValue: (cepValue: string) => void;
  ruaValue: string;
  setRuaValue: (ruaValue: string) => void;
  numeroValue: string;
  setNumeroValue: (numeroValue: string) => void;
  complemento: string;
  setComplemento: (complemento: string) => void;
}

export const DadosContext = createContext<ContextType>({
  cart: [],
  setCart: () => {},
  newCoffees: [],
  setNewCoffees: () => {},
  showCart: false,
  setShowCart: () => {},
  openSidebarCart: false,
  setOpenSidebarCart: () => {},
  handleClickPlus: (id: number) => {},
  handleClickMinus: (id: number) => {},
  handleRemoveItemCard: (id: number) => {},
  metSelect: "",
  setMetSelect: () => {},
  cepValue: "",
  setCepValue: () => {},
  ruaValue: "",
  setRuaValue: () => {},
  numeroValue: "",
  setNumeroValue: () => {},
  complemento: "",
  setComplemento: () => {},
});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CoffeesType[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [openSidebarCart, setOpenSidebarCart] = useState<boolean>(false);
  const [newCoffees, setNewCoffees] = useState<CoffeesType[]>([]);
  const [metSelect, setMetSelect] = useState<string>("");
  const [cepValue, setCepValue] = useState<string>("");
  const [ruaValue, setRuaValue] = useState<string>("");
  const [numeroValue, setNumeroValue] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");

  const updateCart = (newCart: CoffeesType[]) => {
    setCart(newCart);
  };

  const handleClickPlus = (id: number) => {
    const newC = newCoffees.map((coffee) => {
      if (id === coffee.id) {
        return {
          ...coffee,
          quantCart: coffee.quantCart + 1,
        };
      } else {
        return coffee;
      }
    });
    const newCart = cart.map((coffee) => {
      if (id === coffee.id) {
        return {
          ...coffee,
          quantCart: coffee.quantCart + 1,
        };
      } else {
        return coffee;
      }
    });
    setNewCoffees(newC);
    setCart(newCart);
  };
  const handleClickMinus = (id: number) => {
    const newC = newCoffees.map((coffee) => {
      if (id === coffee.id) {
        if (coffee.quantCart > 1) {
          return {
            ...coffee,
            quantCart: coffee.quantCart - 1,
          };
        } else {
          return coffee;
        }
      } else {
        return coffee;
      }
    });
    const newCart = cart.map((coffee) => {
      if (id === coffee.id) {
        return {
          ...coffee,
          quantCart: coffee.quantCart - 1,
        };
      } else {
        return coffee;
      }
    });
    setNewCoffees(newC);
    setCart(newCart);
  };
  const handleRemoveItemCard = (id: number) => {
    const newCart = cart.filter((item, index) => {
      return item.id != id;
    });
    setCart(newCart);
  };

  return (
    <DadosContext.Provider
      value={{
        cart,
        setCart: updateCart,
        showCart,
        setShowCart,
        newCoffees,
        setNewCoffees,
        handleClickPlus,
        handleClickMinus,
        openSidebarCart,
        setOpenSidebarCart,
        handleRemoveItemCard,
        metSelect,
        setMetSelect,
        cepValue,
        setCepValue,
        ruaValue,
        setRuaValue,
        numeroValue,
        setNumeroValue,
        complemento,
        setComplemento,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default ContextProvider;
