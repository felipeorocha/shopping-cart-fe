import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { currency } from '../../utils/currency';

import { Container, ProductTable } from './styles';

class Cart extends Component {
  
  handleUpdateQuantity = product => {
    const { updateQuantity } = this.props;

    updateQuantity(product);
  }

  handleRemoveProduct = product => {
    const { removeFromCart } = this.props;

    removeFromCart(product);
  }

  getCartAmount = products => products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  
  render() {
    const { products } = this.props;

    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { products.map(product => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt="Tenis" />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button">
                        <MdRemoveCircleOutline size={20} color="#7159c1" onClick={() => this.handleUpdateQuantity({ id: product.id, quantity: product.quantity - 1 })} />
                      </button>
                      <input type="text" readOnly value={product.quantity} />
                      <button type="button">
                        <MdAddCircleOutline size={20} color="#7159c1" onClick={() => this.handleUpdateQuantity({ id: product.id, quantity: product.quantity + 1 })} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{currency(product.price * product.quantity)}</strong>
                  </td>
                  <td>
                    <button type="button">
                      <MdDelete size={20} color="#7159c1" onClick={() => this.handleRemoveProduct(product.id)} />
                    </button>
                  </td>
                </tr>
            )) }
          </tbody>
          <span>Total: { currency(this.getCartAmount(products)) }</span>
        </ProductTable>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(CartActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
