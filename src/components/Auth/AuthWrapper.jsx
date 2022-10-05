import styled from 'styled-components';

import AuthLogo from './AuthLogo';

export default function AuthWrapper({ children }) {
  return (
    <StyledPositioner>
      <AuthLogo />
      <StyledContents>
        {children}
      </StyledContents>
    </StyledPositioner>
  );
};

const StyledPositioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

const StyledContents = styled.div`
  padding: 2rem;
`;