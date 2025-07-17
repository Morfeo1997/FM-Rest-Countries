import React, { useState, useEffect } from 'react';
import SearchFilterBar from './UI/filter-section';
import MainContainer from './mainContainer';
import Data from '../data/data.json'

const CountriesApp = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Simular datos de países (reemplaza con tu API call)
  useEffect(() => {
    // Aquí deberías hacer tu llamada a la API
    // Por ejemplo: fetch('https://restcountries.com/v2/all')
    const fetchCountries = async () => {
      try {
        // Simulación de datos - reemplaza con tu API
        const response = await fetch(`${Data}`);
        const countries = await response.json();
        setAllCountries(countries);
        setFilteredCountries(countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // Función para filtrar países
  const filterCountries = (countries, search, region) => {
    return countries.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = region === 'all' || country.region === region;
      return matchesSearch && matchesRegion;
    });
  };

  // Manejar búsqueda
  const handleSearch = (search) => {
    setSearchTerm(search);
    const filtered = filterCountries(allCountries, search, selectedRegion);
    setFilteredCountries(filtered);
  };

  // Manejar cambio de región
  const handleFilterChange = (region) => {
    setSelectedRegion(region);
    const filtered = filterCountries(allCountries, searchTerm, region);
    setFilteredCountries(filtered);
  };

  // Manejar click en país
  const handleCountryClick = (country) => {
    console.log('Country clicked:', country);
    // Aquí puedes implementar la navegación a la página de detalle
  };

  return (
    <div className="min-h-screen bg-Grey-Background dark:bg-Blue-Background">
      <SearchFilterBar 
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />
      <MainContainer 
        allCountries={filteredCountries}
        onCountryClick={handleCountryClick}
      />
    </div>
  );
};

export default CountriesApp;
