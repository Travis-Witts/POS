/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import './style.scss';
import SaleProduct from '../SaleProduct';
import SaleContext from '../../utils/SaleContext'
import { StoreModel, IProduct } from '../../utils/Interface'

const SaleList: React.FC = () => {
  const { saleState } = useContext<StoreModel>(SaleContext);

  useEffect(() => {
  }, []);
  return (
    <div className="table-header">
      <th className="table-header">
        <td className="table-header">Name</td>
        <td className="table-header">Price $</td>
        <td className="table-header">Quantity</td>
      </th>
      {saleState.length ? (
        <ul className="list-group table-header">
          {saleState.map((product: IProduct) => (
            <SaleProduct
              product_id={product.product_id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </ul>
      ) : (
        <h4>No Products to display.</h4>
      )}
    </div>
  );
};

export default SaleList;
