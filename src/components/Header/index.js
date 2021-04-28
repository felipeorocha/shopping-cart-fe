import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from "./styles";

import Logo from '../Logo';

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default Header;
