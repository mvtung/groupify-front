import './App.css'
import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './features/auth/pages/LoginPage';
import SignUpPage from './features/auth/pages/SignUpPage';
import ForgotPasswordPage from './features/auth/pages/ForgotPasswordPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App
