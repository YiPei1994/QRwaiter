import styled from 'styled-components';
import Button from './Button';
import Heading from './Heading';

const StyledConfirmButton = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmButton({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmButton>
      <Heading as="h3">Confirm {resourceName}</Heading>
      <p>
        Are you sure you want to Confirm this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="success" onClick={onConfirm} disabled={disabled}>
          Confirm
        </Button>
      </div>
    </StyledConfirmButton>
  );
}

export default ConfirmButton;
