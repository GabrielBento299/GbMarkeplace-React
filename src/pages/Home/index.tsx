import { ProductArea, InputContainer } from "./styles";
import UseCart from "../../hooks/useCart";
import Loading from "../../components/Loading/Loading";
import CardCart from "../../components/CardCart";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import EmptySearch from "./components/EmptySearch";

export default function Home() {
  const {
    products,
    cart,
    handleAddcart,
    inputSearch,
    setInputSearch,
    filteredProducts,
  } = UseCart();

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

  const hasProducts = products.length > 0;
  const isEmptySearch = hasProducts && filteredProducts.length < 1;

  return (
    <>
      {hasProducts ? (
        <>
          <InputContainer className="container">
            <input
              placeholder="Pesquisar"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
          
             {isEmptySearch && 
              <EmptySearch inputSearch={inputSearch} 
             />}
          </InputContainer>


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
