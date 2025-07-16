import React from 'react';

const CountryCard = ({ country, onClick }) => {
  const formatPopulation = (population) => {
    return population.toLocaleString();
  };

  return (
    <div 
      className="bg-Grey-Background dark:bg-Blue-Elements rounded shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={() => onClick && onClick(country)}
    >
      {/* Flag Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={country.flags?.png || country.flag}
          alt={`${country.name} flag`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Country Information */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {country.name}
        </h3>
        
        <div className="space-y-2">
          <div className="flex">
            <span className="font-semibold text-gray-900 dark:text-white mr-2">
              Population:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              {formatPopulation(country.population)}
            </span>
          </div>
          
          <div className="flex">
            <span className="font-semibold text-gray-900 dark:text-white mr-2">
              Region:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              {country.region}
            </span>
          </div>
          
          <div className="flex">
            <span className="font-semibold text-gray-900 dark:text-white mr-2">
              Capital:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              {country.capital}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;