import { ProductArea, Form, Button } from "./styles";
import UseCart from "../../hooks/useCart";
import Loading from "../../components/Loading/Loading";
import CardCart from "../../components/CardCart";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const {
    products,
    cart,
    handleAddcart,
    inputSearch,
    setInputSearch,
    filteredProducts } = UseCart();
    
  const [pageYPosition, setPageYPosition] = useState(0);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", getPageYAfterScroll);
    return () => window.removeEventListener("scroll", getPageYAfterScroll);
  }, []);

  function backToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      {products.length > 0 ? (
        <>
          <Form className="container">
            <input
              placeholder="Pesquisar"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <div>
              {filteredProducts.length < 1 &&
                `Nenhum resultado encontrado para ${inputSearch}`}
            </div>
          </Form>
          {inputSearch.length > 0 ? (
            <ProductArea className="container">
              {filteredProducts.map((product) => (
                <CardCart
                  product={product}
                  handleAddcart={handleAddcart}
                  cart={cart}
                  key={product.id}
                />
              ))}
            </ProductArea>
          ) : (
            <ProductArea className="container">
              {products.map((product) => (
                <CardCart
                  product={product}
                  handleAddcart={handleAddcart}
                  cart={cart}
                  key={product.id}
                />
              ))}
            </ProductArea>
          )}
        </>
      ) : (
        <Loading />
      )}
      <button
        type="button"
        onClick={backToTop}
        className={`back-to-top ${pageYPosition > 300 && "visible"}`}
      >
        <FaArrowUp size={28} color="#fff" />
      </button>
    </>
  );
}
