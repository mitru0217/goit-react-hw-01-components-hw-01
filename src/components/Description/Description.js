import PropTypes from 'prop-types';
import css from './Description.module.css';

const Description = ({ url, name, tag, location }) => {
  return (
    <div className={css.description}>
      <div className={css.thumb}>
        <img src={url} alt="User avatar" className={css.avatar} />
      </div>
      <div className={css.info}>
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/no-typos
Description.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
