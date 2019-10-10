import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/index';
import Footer from './Footer/index';
import MenuList from './MenuList/index'
import Menu from './Menu/index';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Menu /> */}
      <MenuList />
      <Footer />
    </div>
  );
}

export default App;
