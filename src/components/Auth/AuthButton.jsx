import styled from 'styled-components';

export default function AuthButton({ children, onClick }) {
  return (
    <StyledWrapper onClick={onClick}>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: ${props => props.theme.textColor};
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: ${props => props.theme.accentColor}
    }

    &:active {
      background: ${props => props.theme.accentColor}
    }
`;
