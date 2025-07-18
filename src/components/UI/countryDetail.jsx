import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CountryDetail = ({ country, onBack }) => {
  if (!country) return null;

  const formatPopulation = (population) => {
    return population.toLocaleString();
  };

  const formatCurrencies = (currencies) => {
    if (!currencies) return 'N/A';
    if (Array.isArray(currencies)) {
      return currencies.map(currency => currency.name || currency).join(', ');
    }
    return currencies;
  };

  const formatLanguages = (languages) => {
    if (!languages) return 'N/A';
    if (Array.isArray(languages)) {
      return languages.map(lang => lang.name || lang).join(', ');
    }
    return languages;
  };

  const formatBorders = (borders) => {
    if (!borders || borders.length === 0) return [];
    return borders;
  };

  return (
    <div className="min-h-screen bg-Grey-Background dark:bg-Blue-Background">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-16 px-8 py-3 cursor-pointer bg-white dark:bg-Blue-Elements text-Grey-Text dark:text-white rounded shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </button>

        {/* Country Detail Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Flag */}
          <div className="w-full">
            <img
              src={country.flags?.png || country.flag}
              alt={`${country.name} flag`}
              className="w-full h-auto max-h-96 object-cover rounded shadow-lg"
            />
          </div>

          {/* Country Information */}
          <div className="space-y-8">
            {/* Country Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-Grey-Text dark:text-white">
              {country.name}
            </h1>

            {/* Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-Grey-Text dark:text-white">
                    Native Name:{' '}
                  </span>
                  <span className="text-Grey-Text dark:text-gray-300">
                    {country.nativeName || country.name}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-Grey-Text dark:text-white">
                    Population:{' '}
                  </span>
                  <span className="text-Grey-Text dark:text-gray-300">
                    {formatPopulation(country.population)}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-Grey-Text dark:text-white">
                    Region:{' '}
                  </span>
                  <span className="text-Grey-Text dark:text-gray-300">
                    {country.region}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-Grey-Text dark:text-white">
                    Sub Region:{' '}
                  </span>
                  <span className="text-Grey-Text dark:text-gray-300">
                    {country.subregion || 'N/A'}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-Grey-Text dark:text-white">
                    Capital:{' '}
                  </span>
                  <span className="text-Grey-Text dark:text-gray-300">
                    {country.capital || 'N/A'}
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-Grey-Text dark:text-white">
                    Top Level Domain:{' '}
                  </span>
                  <span className="text-Grey-Text dark:text-gray-300">
                    {country.topLevelDomain ? country.topLevelDomain.join(', ') : 'N/A'}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-Grey-Text dark:text-white">
                    Currencies:{' '}
                  </span>
                  <span className="text-Grey-Text dark:text-gray-300">
                    {formatCurrencies(country.currencies)}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-Grey-Text dark:text-white">
                    Languages:{' '}
                  </span>
                  <span className="text-Grey-Text dark:text-gray-300">
                    {formatLanguages(country.languages)}
                  </span>
                </div>
              </div>
            </div>

            {/* Border Countries */}
            {formatBorders(country.borders).length > 0 && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-semibold text-Grey-Text dark:text-white whitespace-nowrap">
                    Border Countries:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {formatBorders(country.borders).map((border, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white dark:bg-Blue-Elements text-Grey-Text dark:text-white rounded shadow-sm text-sm"
                      >
                        {border}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
