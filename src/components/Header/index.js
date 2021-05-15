import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from "./styles";

import Logo from '../Logo';

const Header = ({ cart }) => {
  console.log("cart", cart)
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

export default connect(state => ({ // whenever a state within connect() method changes, the component will rerender too, just like setState() method
  cart: state.cart // state.reducer_name
}))(Header);
