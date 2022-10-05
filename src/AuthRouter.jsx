import { Navigate } from 'react-router-dom';

export default function AuthRouter({ children }) {
  const user = localStorage.getItem('accessToken');

  if (user === null) return <Navigate to="/" />;

  return <>{children}</>;
};
