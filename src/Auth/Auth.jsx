import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAccessTypeState } from '../utils/hooks';

import AuthWrapper from '../components/Auth/AuthWrapper/AuthWrapper';
import AuthForm from './AuthForm/AuthForm';

import {
  StyledAuthForm,
  StyledButton,
  StyledButtonWrapper
} from './Auth.style';

import { HiOutlineArrowNarrowRight } from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight';

export default function Auth() {
  const navigate = useNavigate();
  const { accessType, reversAceessType, changeAccessType } = useAccessTypeState();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/todo');
    }
  }, [navigate]);

  return (
    <StyledAuthForm>
      <AuthWrapper>
        <StyledButtonWrapper>
          <StyledButton onClick={() => changeAccessType(accessType)}>
            {reversAceessType(accessType)}
            <HiOutlineArrowNarrowRight />
          </StyledButton>
        </StyledButtonWrapper>
        <AuthForm accessType={accessType} />
      </AuthWrapper>
    </StyledAuthForm >
  );
}
