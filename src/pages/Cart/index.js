import { Component } from 'react';
import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable } from './styles';

class Cart extends Component {

  state = {
    quantity: 0
  };

  handleUpdateQuantity = item => {
    // console.log("A=>", productId);
    const { dispatch } = this.props;

    console.log("x", item)
    
    dispatch({
      type: 'UPDATE_CART',
      payload: { ...item, quantity: item.quantity + 1 }
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
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="text" readOnly value={product.quantity} />
                      <button type="button">
                        <MdAddCircleOutline size={20} color="#7159c1" onClick={() => this.handleUpdateQuantity(product)} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>R$ 258,80</strong>
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
