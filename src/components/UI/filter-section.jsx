import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const SearchFilterBar = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const regions = [
    { value: 'all', label: 'Filter by Region' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region.value);
    setIsDropdownOpen(false);
    onFilterChange(region.value);
  };

  const selectedRegionLabel = regions.find(r => r.value === selectedRegion)?.label || 'Filter by Region';

  return (
    <div className="flex flex-col bg-white dark:bg-Blue-Background md:flex-row justify-between items-start md:items-center gap-6 py-8 px-4 md:px-8">
      {/* Barra de busqueda */}
      <div className="relative rounded w-full md:w-96">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-Grey-Background">
          <Search size={20} className='stroke-Grey-Input dark:stroke-white' />
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-12 pr-4 py-4 bg-white dark:bg-Blue-Elements text-Grey-Text dark:text-white rounded shadow-md border-none outline-none placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
      </div>

      {/* Filtro */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center cursor-pointer justify-between w-48 px-6 py-4 bg-white dark:bg-Blue-Elements text-Grey-Text dark:text-white rounded shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="text-sm font-medium">
            {selectedRegionLabel}
          </span>
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Abrir Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-48 mt-2 bg-white dark:bg-Blue-Elements rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-10">
            {regions.map((region) => (
              <button
                key={region.value}
                onClick={() => handleRegionSelect(region)}
                className={`w-full px-6 py-3 text-left text-sm hover:bg-Grey-Background dark:hover:bg-Grey-Input transition-colors duration-150 ${
                  selectedRegion === region.value 
                    ? 'bg-blue-50 cursor-pointer dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                    : 'text-gray-900 cursor-pointer dark:text-white'
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Cerrar opciones */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-5"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default SearchFilterBar;