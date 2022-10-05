import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ACCESS_TYPE, initialUserInfo } from '../constants';

import {
  validationUserLogin,
  validationUserRegister
} from '../utils/functions';

import AuthButton from '../components/Auth/AuthButton';
import AuthContent from "../components/Auth/AuthContent";
import InputWithLabel from "../components/Auth/InputWithLabel";
import { axios } from '../lib/axios';

export default function AuthForm({ accessType }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  useEffect(() => {
    setUserInfo(initialUserInfo);
  }, [accessType]);

  const handleChange = ({ target: { value, name } }) => {
    setUserInfo((currentState) => {
      return {
        ...currentState,
        [name]: value,
      };
    });
  };

  const handleButtonDisabled = () => {
    const { email, password, passwordCheck } = userInfo;

    if (accessType === ACCESS_TYPE.LOGIN) {
      return validationUserLogin(email, password);
    } else if (accessType === ACCESS_TYPE.REGISTER) {
      return validationUserRegister(email, password, passwordCheck);
    }

    return true;
  };

  const handleSubmit = async () => {
    const { email, password } = userInfo;

    try {
      const result = await axios.post(
        `/auth/${accessType === ACCESS_TYPE.LOGIN ? 'signin' : 'signup'}`,
        {
          email,
          password
        },
      );

      localStorage.setItem('accessToken', result.access_token);
      navigate('/todo');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContent title={accessType}>
      <StyledInputWrapper>
        <InputWithLabel
          label="이메일"
          name="email"
          value={userInfo.email}
          onChange={(e) => handleChange(e)}
          placeholder="이메일"
        />
        <InputWithLabel
          label="비밀번호"
          name="password"
          value={userInfo.password}
          onChange={(e) => handleChange(e)}
          placeholder="비밀번호"
          type="password"
        />
        {
          accessType === ACCESS_TYPE.REGISTER &&
          <InputWithLabel
            label="비밀번호 확인"
            name="passwordCheck"
            value={userInfo.passwordCheck}
            onChange={(e) => handleChange(e)}
            placeholder="비밀번호 확인"
            type="password"
          />
        }
        <AuthButton
          onClick={() => handleSubmit()}
          disabled={handleButtonDisabled()}
        >
          {accessType}
        </AuthButton>
      </StyledInputWrapper>
    </AuthContent>
  );
};

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;