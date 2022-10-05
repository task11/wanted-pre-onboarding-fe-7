import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthRouter from './AuthRouter';

import Auth from './Auth/Auth';
import Todo from './Todo/Todo';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/todo"
          element={
            <AuthRouter>
              <Todo />
            </AuthRouter>
          }
        />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  );
};