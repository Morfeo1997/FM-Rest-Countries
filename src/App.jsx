import { useState, useEffect } from 'react';
import { Moon } from 'lucide-react';

import Header from './components/UI/header.jsx'


function App() {
    const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const root = document.getElementById('root');
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }, [isDark]);

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
    </>
  )
}

export default App
