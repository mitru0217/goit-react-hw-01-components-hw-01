import PropTypes from 'prop-types';
import {
  Item,
  List,
  Label,
  Percentage,
} from 'components/StatList/StatList.styled';

const StatList = ({ stats }) => {
  return (
    <List>
      {stats.map(stat => (
        <Item key={stat.id}>
          <Label class="label">{stat.label}</Label>
          <Percentage>{stat.percentage}%</Percentage>
        </Item>
      ))}
    </List>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
export default StatList;
