import './App.css'
import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './features/auth/pages/LoginPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App
