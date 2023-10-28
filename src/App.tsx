import './App.css'
import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './features/auth/pages/LoginPage';
import SignUpPage from './features/auth/pages/SignUpPage';
import ForgotPasswordPage from './features/auth/pages/ForgotPasswordPage';
import HomePage from './features/home/pages/HomePage';
import GroupsPage from './features/groups/pages/GroupsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App
