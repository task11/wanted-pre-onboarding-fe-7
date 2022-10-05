import styled from 'styled-components';
import { HiOutlineArrowNarrowRight } from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAccessTypeState } from '../utils/hooks';

import AuthWrapper from '../components/Auth/AuthWrapper';
import AuthForm from './AuthForm';

export default function Auth() {
  const navigate = useNavigate();
  const { accessType, reversAceessType, changeAccessType } = useAccessTypeState();

  useEffect(() => {
    if (localStorage.getItem('token')) {
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

const StyledAuthForm = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  justify-content: center;
  width: 500px;
  height: 500px;
  border-radius: 20px;
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.accentColor};
  font-size: 1.4rem;
  cursor: pointer;
  &:hover{
    color: ${props => props.theme.textColor};
  }
`;