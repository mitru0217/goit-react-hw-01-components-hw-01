import styled from '@emotion/styled';
import getRandomHexColor from 'Helpers/Helpers';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-flex;
  align-items: center;
  ${'' /* justify-content: space-around; */}
  width: 300px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
  color: white;
`;
export const Percentage = styled.span`
  font-size: 20px;
  color: white;
`;
