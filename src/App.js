import React from 'react';
import Catalogue from './components/catalogue/catalogue';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div>
      <Header />
      <Catalogue />
    </div>
  );
};

export default App;
