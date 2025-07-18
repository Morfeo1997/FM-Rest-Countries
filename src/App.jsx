
import { useState, useEffect } from 'react';
import { Moon } from 'lucide-react';
import FilterSection from './components/UI/filter-section.jsx'
import MainContainer from './components/mainContainer.jsx'
import Header from './components/UI/header.jsx'
import Data from './data/data.json'

function App() {
  const [isDark, setIsDark] = useState(false);
  
 {/* Filter States */}
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');

  {/* Dark Theme */}
  useEffect(() => {
    const root = document.getElementById('root');
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }, [isDark]);

  {/* Esto carga los datos iniciales */}
  useEffect(() => {
    setAllCountries(Data);
    setFilteredCountries(Data);
  }, []);

  {/* Filter Countries function */}
  const filterCountries = (countries, search, region) => {
    return countries.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = region === 'all' || country.region === region;
      return matchesSearch && matchesRegion;
    });
  };

  {/* Manejo de busqueda */}
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = filterCountries(allCountries, term, filterRegion);
    setFilteredCountries(filtered);
    console.log('Searching for:', term);
  };

 {/* Change Filter function */}
  const handleFilterChange = (region) => {
    setFilterRegion(region);
    const filtered = filterCountries(allCountries, searchTerm, region);
    setFilteredCountries(filtered);
    console.log('Filter by region:', region);
  };

  {/* Manejo de la navegacion (Todavia sin realizar) */}
  const handleCountryClick = (country) => {
    console.log('Country clicked:', country);
    
  };

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <FilterSection 
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />
      <MainContainer 
        allCountries={filteredCountries} 
        onCountryClick={handleCountryClick}
      />
    </>
  )
}

export default App