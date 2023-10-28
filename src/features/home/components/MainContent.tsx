import React, { useEffect } from 'react';
import HeaderMain from './HeaderMain';
import { getGroup } from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const MainContent: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getGroup();
      if (result.status == 403) {
        navigate('/login');
        return
      }
    }

    fetchData();
  }, [navigate])
  return (
    <main>
      <HeaderMain />
      <h1 className='text-white text-center mt-5'>Welcome to Groupify</h1>
    </main>
  );
}

export default MainContent;