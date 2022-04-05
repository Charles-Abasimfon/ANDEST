import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

/* This component helps to automatically scroll a newly opened page/route to the top */
const AutoScrollToTop = ({ children }) => {
  const link = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [link]);
  return children;
};

export default AutoScrollToTop;
