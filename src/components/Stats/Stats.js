/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import css from './Stats.module.css';

const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <ul className={css.stats}>
      <li className={css.items}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}> {followers}</span>
      </li>
      <li className={css.items}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}> {views}</span>
      </li>
      <li className={css.items}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}> {likes}</span>
      </li>
    </ul>
  );
};
Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number,
};

export default Stats;
