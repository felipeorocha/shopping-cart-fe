import { Component } from 'react';
import { connect } from 'react-redux';
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

    dispatch({ // when called dispatch, all reducers are triggered
      type: 'ADD_TO_CART', // type
      product, // payload
    });
  }

  render() {
    const { products } = this.state;
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
                  <MdAddShoppingCart size={16} color="#fff" /> 3
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

export default connect()(Home);
