import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>BDPortFlow Terminal OS</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default MainLayout;