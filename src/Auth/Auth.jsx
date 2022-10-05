import styled from 'styled-components';
import { HiOutlineArrowNarrowRight } from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AuthWrapper from '../components/Auth/AuthWrapper';
import AuthForm from './AuthForm';

const ACCESS_TYPE = {
  'LOGIN': '로그인',
  'REGISTER': '회원가입',
};

export default function Auth() {
  const navigate = useNavigate();
  const [accessType, setAccessType] = useState(ACCESS_TYPE.LOGIN);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo');
    }
  }, [navigate]);

  const reversAceessType = (accessType) => {
    return accessType === ACCESS_TYPE.REGISTER ? ACCESS_TYPE.LOGIN : ACCESS_TYPE.REGISTER;
  };

  const changeAccessType = (accessType) => {
    setAccessType(reversAceessType(accessType));
  };

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