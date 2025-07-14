import { useState, useEffect } from 'react';
import { Moon } from 'lucide-react';
import FilterSection from './components/UI/filter-section.jsx'

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

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log('Searching for:', term);
  };

  const handleFilterChange = (region) => {
    setFilterRegion(region);
    console.log('Filter by region:', region);
  };

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <FilterSection 
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
      />
    </>
  )
}

export default App
