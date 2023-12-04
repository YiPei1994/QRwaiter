import styled, { css } from 'styled-components';

const format = {
  between: css`
    align-items: center;
    justify-content: space-between;
    display: flex;
  `,
  center: css`
    align-items: center;
    justify-content: center;
    display: flex;
  `,
  right: css`
    align-items: center;
    justify-content: flex-end;
    display: flex;
  `,
};

const FlexContainer = styled.div`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => format[props.format]}
`;

FlexContainer.defaultProps = {
  fomrat: 'center',
};

export default FlexContainer;
