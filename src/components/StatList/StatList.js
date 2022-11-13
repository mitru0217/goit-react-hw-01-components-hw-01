import PropTypes from 'prop-types';

const StatList = ({ stats }) => {
  return (
    <ul class="stat-list">
      {stats.map(stat => (
        <li key={stat.id}>
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
export default StatList;
