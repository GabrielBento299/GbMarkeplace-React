import { AiOutlineShoppingCart } from 'react-icons/Ai';
import { Container } from './styles';

export default function CardEmpty() {
    return (
        <Container className="container">
            <div>
                <AiOutlineShoppingCart />
            </div>

            <h1>Você ainda não tem nenhum produto adicionado ao carrinho</h1>
            <p>Adicione um produto ao seu carrinho para poder concuir sua compra</p>
        </Container>
    )
}