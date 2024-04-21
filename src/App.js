import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import BreweryDetailsScreen from './screens/BreweryDetailsScreen';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route
            path="/brewerydetails/:id"
            element={<BreweryDetailsScreen />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
