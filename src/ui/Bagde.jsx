import styled, { css } from 'styled-components';

const variation = {
  blue: css`
    background-color: #3498db;
    color: #fff;
  `,
  green: css`
    background-color: #2ecc71;
    color: #fff;
  `,
  purple: css`
    background-color: #9b59b6;
    color: #fff;
  `,
  orange: css`
    background-color: #e67e22;
    color: #fff;
  `,
  teal: css`
    background-color: #008080;
    color: #fff;
  `,
  red: css`
    background-color: #e74c3c;
    color: #fff;
  `,
};

const Badge = styled.span`
  padding: 4px 6px;
  border-radius: 5px;
  font-size: 12px;
  ${(props) => variation[props.variation]}
`;

export default Badge;
