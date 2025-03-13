import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RefreshHandler = ({ setIsAuthenticated }) => { // Destructure props correctly
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      setIsAuthenticated(true);
      if (location.pathname === '/' || location.pathname === '/login') {
        navigate('/home', { replace: false });
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
};

export default RefreshHandler;
