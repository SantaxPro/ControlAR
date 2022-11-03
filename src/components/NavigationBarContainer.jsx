const NavigationBarContainer = ({ children }) => {
    return (
      <nav
        className="flex rounded-b-md bg-white fixed top-0 right-0 left-0
        drop-shadow-xl h-16 py-2 px-6 items-center justify-center"
      >
        {children}
      </nav>
    );
  };

export default NavigationBarContainer;