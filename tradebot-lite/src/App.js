import './App.css';
import React from 'react';
import AppRouter from './AppRouter';
import { Helmet } from 'react-helmet';

class App extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>TradeBot - Welcome</title>
        </Helmet>
        <AppRouter />
      </>
    );
  }
}

export default App;
