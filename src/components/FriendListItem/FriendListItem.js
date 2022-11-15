import PropTypes from 'prop-types';

import {
  FriendItem,
  FriendImg,
  Status,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status>{isOnline}</Status>
      <FriendImg src={avatar} alt="User avatar"></FriendImg>
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
