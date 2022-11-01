const NavigationBarContainer = ({ children }) => {
    return (
      <nav
        className="flex rounded-b-md container mx-auto bg-white 
        drop-shadow-xl h-16 p-2 items-center justify-end"
      >
        {children}
      </nav>
    );
  };

export default NavigationBarContainer;