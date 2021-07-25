import React from 'react';
import './App.scss';
import './styles/main.scss';
import Header from './components/Header';
import Graph from './components/Graph';
import InvestmentForm from './components/InvestmentForm';
import { AppContextProvider } from './context';

const App = () => {
  return (
    <AppContextProvider>
      <div className='App'>
        <Header />
        <div className='home_grid'>
          <div className='home_list'>
            <h2 className='home_subtitle'>Portfolio</h2>
            <InvestmentForm />
          </div>

          <div className='home_graph'>
            <h2 className='home_subtitle'>Prediction</h2>
            <Graph />
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
};

export default App;
