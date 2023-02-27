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
});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CoffeesType[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [openSidebarCart, setOpenSidebarCart] = useState<boolean>(false);
  const [newCoffees, setNewCoffees] = useState<CoffeesType[]>([]);

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
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default ContextProvider;
