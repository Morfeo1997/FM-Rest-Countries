import { Moon } from 'lucide-react';


const Header = ({isDark, setIsDark}) => {
  

  return (
    <header className="bg-white dark:bg-Blue-Elements shadow-md px-6 py-4 border-b-4 border-Grey-Background dark:border-Blue-Background transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Title */}
        <div>
          <h2 className="text-lg md:text-2xl font-bold text-Grey-Text dark:text-white">
            What in the world?
          </h2>
        </div>

        {/* Right side - Dark mode toggle */}
        <div 
          className="flex items-center space-x-2  "
          
        >
          <Moon onClick={() => setIsDark(!isDark)} className="w-5 h-5 cursor-pointer text-gray-700 dark:text-gray-300 hover:opacity-80 transition-opacity duration-300" />
          <span className="text-Grey-Text dark:text-white font-medium">
            Dark Mode
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
