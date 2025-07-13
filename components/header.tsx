import React from "react";

const Header = () => {
  return (
    <header className="w-full py-4 bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Header</h1>
          <div className="flex items-center space-x-4">
            {/* Add navigation items here if needed */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
