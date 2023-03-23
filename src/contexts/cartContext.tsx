import axios from "axios";
import { createContext, useState, ReactNode, useEffect, useMemo } from "react";
import { toast } from "react-toastify";

interface IProducts {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  available_quantity: number;
  permalink?: string;
}

interface ICartContext {
  products: IProducts[];
  handleAddcart: (products: IProducts) => void;
  cart: IProducts[];
  removedItem: (favoritesId: string) => void;
  isLoading: boolean;
  inputSearch: string;
  setInputSearch: (inputSearch: string) => void;
  filteredProducts: IProducts[];
}

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");

  const [cart, setCart] = useState<IProducts[]>(() => {
    const storagedCart = localStorage.getItem("@carrinho:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  async function getProducts() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://api.mercadoLibre.com/sites/MLB/search?q=celular`);
      setProducts(data.results);
      console.log(data.results);
    } catch (err) {
      toast.error("Erro! volte mais tarde!");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  const filteredProducts = useMemo(() => products.filter((product) => (
    product.title.toLowerCase().includes(inputSearch.toLowerCase())
  )), [products, inputSearch]);


  const handleAddcart = (productCart: IProducts) => {
    try {
      const productAllReadyExitsInCart = cart.find(
        (product: IProducts) => product.id === productCart.id
      );

      if (productAllReadyExitsInCart) {
        const newProduct = cart.filter(
          (product: IProducts) => product.id !== productCart.id
        );
        toast.success("Produto removido do carrinho!");
        setCart(newProduct);
        localStorage.setItem("@carrinho:cart", JSON.stringify(newProduct));
      } else {
        toast.success("Produto adicionado ao carrinho com sucesso!");
        localStorage.setItem(
          "@carrinho:cart",
          JSON.stringify([...cart, productCart])
        );
        setCart((prevState) => [...prevState, productCart]);
      }
    } catch (err) {
      toast.error("Erro! volte mais tarde!");
    }
  };

  const removedItem = (favoritesId: string) => {
    try {
      const newFavorites = cart.filter((product) => product.id !== favoritesId);
      setCart(newFavorites);
      localStorage.setItem("@carrinho:cart", JSON.stringify(newFavorites));
      toast.success("Produto removido do carrinho com sucesso!");
    } catch (err) {
      toast.error("Erro! volte mais tarde!");
    }
  };

  return (
    <CartContext.Provider
      value={{ 
        products, 
        handleAddcart, 
        cart, 
        removedItem, 
        isLoading, 
        inputSearch, 
        setInputSearch,
        filteredProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
