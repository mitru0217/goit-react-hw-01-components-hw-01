import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  height: auto;
  margin-top: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const FriendImg = styled.img`
  margin: 0;
  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 5px;
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => {
    let Online = props.children;
    return Online ? 'green' : 'red';
  }};
`;

export const FriendName = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 20px;
`;
