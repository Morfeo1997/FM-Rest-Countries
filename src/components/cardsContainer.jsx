import CountryCard from "./countryCard";

const CardContainer = ({ countries, onCountryClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-12  ">
      {countries.slice(0, 8).map((country) => (
        <CountryCard 
          key={country.alpha3Code || country.name}
          country={country}
          onClick={onCountryClick}
        />
      ))}
    </div>
  );
};

export default CardContainer