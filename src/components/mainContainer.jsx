import React, {useState} from "react";
import CardContainer from "./cardsContainer";

const MainContainer = ({ allCountries = [], onCountryClick }) => {
  const [visibleCountries, setVisibleCountries] = useState(8);

  const handleLoadMore = () => {
    setVisibleCountries(prev => prev + 8);
  };

  // Validar que allCountries sea un array
  const countries = Array.isArray(allCountries) ? allCountries : [];
  const displayedCountries = countries.slice(0, visibleCountries);
  const hasMore = visibleCountries < countries.length;

  // Dividir los países en grupos de 8 para cada CardContainer
  const countryGroups = [];
  for (let i = 0; i < displayedCountries.length; i += 8) {
    countryGroups.push(displayedCountries.slice(i, i + 8));
  }

  return (
    <div className="w-full min-h-screen bg-Grey-Background dark:bg-Blue-Background">
      <div className="max-w-7xl mx-auto py-8">
        {/* Contenedores de cartas */}
        <div className="space-y-16">
          {countryGroups.map((group, index) => (
            <CardContainer 
              key={index}
              countries={group}
              onCountryClick={onCountryClick}
            />
          ))}
        </div>

        {/* Botón Load More */}
        {hasMore && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-Grey-Background dark:bg-Blue-Elements text-Grey-Text dark:text-white cursor-pointer border-2 border-Grey-Input font-semibold rounded shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Load More Countries
            </button>
          </div>
        )}

        {/* Mensaje cuando no hay más países */}
        {!hasMore && countries.length > 8 && (
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400">
              You've seen all {countries.length} countries!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContainer;