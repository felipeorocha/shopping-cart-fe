import { Component } from 'react';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

class Home extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const { data } = await api.get('/products');
    this.setState({ products: data });
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
              <span>R$ {product.price}</span>
      
              <button type="button">
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

export default Home;
