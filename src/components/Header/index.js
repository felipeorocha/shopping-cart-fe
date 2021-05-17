import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from "./styles";

import Logo from '../Logo';

const Header = ({ cart }) => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>{cart.length} {cart.length < 2 ? 'item' : 'itens'}</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Header);
