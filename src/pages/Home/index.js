import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

import tenis1 from '../../assets/1.jpeg';
import tenis2 from '../../assets/2.jpeg';
import tenis3 from '../../assets/3.jpeg';
import tenis4 from '../../assets/4.jpeg';

const Home = () => {
  return (
    <ProductList>
      <li>
        <img src={tenis1} alt="Tênis" />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis2} alt="Tênis" />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis3} alt="Tênis" />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis1} alt="Tênis" />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis4} alt="Tênis" />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis2} alt="Tênis" />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={tenis3} alt="Tênis" />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
