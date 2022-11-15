import styled from '@emotion/styled';

export const Table = styled.table`
  table-layout: fixed;
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  border-collapse: collapse;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const Thead = styled.thead`
  background-color: #12d2d2;
  height: 50px;
  color: white;
  letter-spacing: 1px;
`;

export const HeadTh = styled.th`
  &:nth-of-type(1) {
    border-right: 1px solid white;
  }
  &:nth-of-type(2) {
    border-right: 1px solid white;
  }
`;
export const BodyTr = styled.tr`
  background-color: white;
  &:nth-of-type(even) {
    background-color: #e0e0e0;
  }
`;
export const BodyTd = styled.td`
  border: 1px solid #c0c0c0;
  border-top: none;
  border-bottom: none;
  text-align: center;

  padding: 10px;
`;
