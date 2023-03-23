import { CardContainer, Title, Span, Image, BtnGroup, Button } from "./styles";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";

interface IProductsProps {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
    available_quantity: number;
}

interface Props {
    product: IProductsProps;
    handleAddcart?: (products: IProductsProps) => void;
    cart?: IProductsProps[];
}

export default function CardCart({product, handleAddcart, cart}: Props) {
    return (
        <CardContainer>
        <Image src={product.thumbnail} alt={product.title} />
        <div className="container-items">
        <Title>{product.title}</Title>
        <Span>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </Span>
        <BtnGroup>
          <Button onClick={() => {{handleAddcart &&  handleAddcart(product)}}}>
            {
                cart?.some((itemCart: IProductsProps) => itemCart.id === product.id) 
                ? <div><span>Adicionado</span> <BsFillCartCheckFill /> </div> 
                : <div><span>Adicionar ao carrinho</span> <BsFillCartPlusFill /> </div>
              }
          </Button>
        </BtnGroup>
        </div>
      </CardContainer>    
    )
}