import PropTypes from 'prop-types';

import {
  Table,
  Thead,
  HeadTh,
  BodyTr,
  BodyTd,
} from '../TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <HeadTh>TYPE</HeadTh>
          <HeadTh>AMOUNT</HeadTh>
          <HeadTh>CURRENCY</HeadTh>
        </tr>
      </Thead>

      <tbody>
        {items.map(item => (
          <BodyTr key={item.id}>
            <BodyTd>{item.type}</BodyTd>
            <BodyTd>{item.amount}</BodyTd>
            <BodyTd>{item.currency}</BodyTd>
          </BodyTr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
