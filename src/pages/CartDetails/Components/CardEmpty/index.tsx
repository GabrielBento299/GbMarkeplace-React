import { Link } from "react-router-dom";
import { Container } from "./styles";
import { BsCart4 } from "react-icons/bs";

export default function CardEmpty() {
  return (
    <Container className="container">
      <div>
        <BsCart4 />
      </div>

      <h1>Você ainda não tem nenhum produto adicionado ao carrinho</h1>
      <Link to="/">Clique aqui para adicionar os produtos ao carrinho!</Link>
    </Container>
  );
}
