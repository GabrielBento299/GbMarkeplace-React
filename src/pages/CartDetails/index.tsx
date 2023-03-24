import { Container, ProductTable, ItemsAction } from "./styles";

import { BsFillCartDashFill } from "react-icons/bs";

import UseCart from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatMoney";
import Button from "../../components/Button";
import CardEmpty from "./Components/CardEmpty";

export default function CartDetails() {
  const { cart, removedItem } = UseCart();

  console.log(cart)

  function removedItemFavorites(favoritesId: string) {
    removedItem(favoritesId);
  }

  const subTotal = cart.reduce(
    (sumTotal, product) => sumTotal + product.price,
    0
  );

  return (
    <>
      <div>{cart.length === 0 && <CardEmpty />}</div>

      {cart?.length > 0 && (
        <Container>
          <ProductTable>
            <thead>
              <tr>
                <th>Produto</th>
                <th></th>
                <th>Preço</th>
                <th>Detalhes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((favorites) => (
                <tr key={favorites.id}>
                  <td>
                    <img src={favorites.thumbnail} alt={favorites.id} />{" "}
                  </td>
                  <td>
                    <span>{favorites.title}</span>
                  </td>
                  <td>
                    <span>{formatCurrency(favorites.price)}</span>
                  </td>
                  <td>
                    <a
                      className="link-detail"
                      target="_blank"
                      href={favorites.permalink}
                    >
                      Ver mais
                    </a>
                  </td>
                  <td>
                    <Button
                      onClick={() => removedItemFavorites(favorites.id)}
                      bgColor="#F63132"
                    >
                      <div>
                        <span>Remover</span>
                        {<BsFillCartDashFill />}
                      </div>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <ItemsAction>
            <Button bgColor="#5061fc" widthSize="20%">
              Finalizar pedido
            </Button>
            <h2>{formatCurrency(subTotal)}</h2>
          </ItemsAction>
        </Container>
      )}
    </>
  );
}
