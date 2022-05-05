import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  updateCount,
} from '../../../../feature/reducers/Cart/cart.slice';
import { Link } from 'react-router-dom';
import styles from './RowItem.module.scss';

const RowItem = ({ item }) => {
  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(item.count);

  const handleChange = (e) => {
    setCartCount(e.target.value);
    const data = {
      ...item,
      count: e.target.value,
    };
    dispatch(updateCount(data));
  };

  return (
    <tr>
      {/* первая ячека */}
      <td>
        <div className={styles.info}>
          <span
            onClick={() => dispatch(removeItemFromCart(item))}
            className={styles.delete}
          >
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1 1L13 13M13 1L1 13' stroke='black' />
            </svg>
          </span>

          <Link to={`/products/${item.id}`}>
            <img src={item.image} alt={item.title} />
          </Link>
          <div className={styles.deep}>
            <p>{item.title}</p>
            <div className={styles.footer}>
              <span
                className={styles.color}
                style={{ backgroundColor: `${item.color}` }}
              />
              <span className={styles.size}>{item.size}</span>
            </div>
          </div>
        </div>
      </td>

      {/* вторая */}
      <td>${item.price}</td>

      {/* третья */}
      <td>
        <input type='number' value={cartCount} onChange={handleChange} />
      </td>

      {/* четвертая */}
      <td>${item.price * item.count}</td>
    </tr>
  );
};

export default RowItem;
