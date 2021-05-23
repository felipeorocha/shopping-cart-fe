import { Component } from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

import { MdAddShoppingCart } from 'react-icons/md';

import { currency } from '../../utils/currency';
import api from '../../services/api';

class Home extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const { data } = await api.get('products');

    const formatData = data.map(product => ({
      ...product, priceFormatted: currency(product.price)
    }));

    this.setState({ products: formatData });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch(CartActions.addToCart(product));
  }

  render() {
    const { products } = this.state;
    const { productCart } = this.props;
    const aux = productCart.map(item => ({ id: item.id, quantity: item.quantity }));
    
    return (
      <ProductList>
        {
          products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
      
              <button type="button" onClick={() => this.handleAddProduct(product)}>
                <div>
                  <MdAddShoppingCart size={16} color="#fff" /> { aux.map(item => item.id === product.id ? item.quantity : null) }
                </div>
                <span>Add to cart</span>
              </button>
            </li>
          ))
        }
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  productCart: state.cart
});

export default connect(mapStateToProps)(Home);
