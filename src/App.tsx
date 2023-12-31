import './App.css'
import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './features/auth/pages/LoginPage';
import SignUpPage from './features/auth/pages/SignUpPage';
import ForgotPasswordPage from './features/auth/pages/ForgotPasswordPage';
import HomePage from './features/home/pages/HomePage';
import GroupsPage from './features/groups/pages/GroupsPage';
import UsersPage from './features/users/pages/UsersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setting" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App
