import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from './Auth/Auth';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/todo"
          element={
            <div>todo</div>
            // <AuthRouter>
            //   <HomePage />
            // </AuthRouter>
          }
        />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  );
};