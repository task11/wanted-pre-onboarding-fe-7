import AuthLogo from '../AuthLogo/AuthLogo';

import { StyledContents, StyledPositioner } from './AuthWrapper.style';

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
