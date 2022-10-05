import Axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_API_KEY;

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const { config } = error;
    const status = error.response.data.statusCode;
    const reason = error.response.data.message;

    const originalRequest = config;

    if (status === 404 && reason === '해당 사용자가 존재하지 않습니다.') {
      alert('사용자 정보가 없습니다. 다시 로그인 해주세요.');
      window.location.href = '/';
      return axios(originalRequest);
    }

    if (status === 400 && reason === '동일한 이메일이 이미 존재합니다.') {
      alert('동일한 이메일이 이미 존재합니다. 다른 이메일로 가입 해주세요');
      window.location.href = '/';
      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);