import { Component } from 'react';
import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { currency } from '../../utils/currency';

import { Container, ProductTable } from './styles';

class Cart extends Component {
  
  handleUpdateQuantity = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: product
    });
  }
  
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
                <tr>
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
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
            )) }
          </tbody>
        </ProductTable>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart
});

export default connect(mapStateToProps)(Cart);
