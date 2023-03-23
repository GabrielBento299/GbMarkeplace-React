import { ReactNode } from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import UseCart from '../../hooks/useCart';
 
import { ContainerHeader, Icon, ItemsLinks} from './styles';

export default function Header () {
  const { cart } = UseCart();
  const cartQuantity = cart.length;

  return (
    <ContainerHeader>
      <div className="container">
        <div>
          <Link to="/">Gb Marketplace</Link>
        </div>

          <ItemsLinks className="items-links">
            <Link to="/carrinho">Meu carrinho
            <Icon className="icon">
              <span>{cartQuantity} {cartQuantity === 1 ? "Iten" : "Itens"} </span>
              <RiShoppingBasketFill /> 
            </Icon>
            </Link>
          </ItemsLinks>
        </div>
      </ContainerHeader>
  
  )
}

