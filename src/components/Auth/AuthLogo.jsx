import styled from 'styled-components';

export default function AuthLogo() {
  return (
    <StyledLogoWrapper>
      <StyledLogo>JH-TODO-LIST</StyledLogo>
    </StyledLogoWrapper>
  );
};

const StyledLogoWrapper = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledLogo = styled.div`
    font-size: 3.6rem;
    letter-spacing: 5px;
    text-decoration: none;
`;