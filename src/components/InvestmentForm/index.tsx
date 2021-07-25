import React, { useContext } from 'react';
import NewEntry from './NewEntry';
import EntryHeader from './EntryHeader';
import IndividualEntry from './IndividualEntry';
import { AppContext } from '../../context';

const mockData = [
  {
    name: 'ILP',
    currentValue: 1000,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 10,
  },
  {
    name: 'Stocks1',
    currentValue: 2000,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 10,
  },
  {
    name: 'Stocks2',
    currentValue: 1500,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 20,
  },
  {
    name: 'ILP',
    currentValue: 1000,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 10,
  },
  {
    name: 'Stocks1',
    currentValue: 2000,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 10,
  },
  {
    name: 'Stocks2',
    currentValue: 1500,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 20,
  },
  {
    name: 'ILP',
    currentValue: 1000,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 10,
  },
  {
    name: 'Stocks1',
    currentValue: 2000,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 10,
  },
  {
    name: 'Stocks2',
    currentValue: 1500,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 20,
  },
  {
    name: 'ILP',
    currentValue: 1000,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 10,
  },
  {
    name: 'Stocks1',
    currentValue: 2000,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 10,
  },
  {
    name: 'Stocks2',
    currentValue: 1500,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 20,
  },
  {
    name: 'ILP',
    currentValue: 1000,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 10,
  },
  {
    name: 'Stocks1',
    currentValue: 2000,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 10,
  },
  {
    name: 'Stocks2',
    currentValue: 1500,
    annualDeposits: 1200,
    interestRate: 0.03,
    years: 20,
  },
];

const InvestmentForm = () => {
  const { appState } = useContext(AppContext);

  return (
    <div className='investment'>
      <div className='investment_entries_container'>
        <EntryHeader />
        <div className='investment_entries_container-inner'>
          {appState.length > 0 ? (
            <>
              {appState.map((entry: any) => (
                <div key={entry.id}>
                  <IndividualEntry data={entry} />
                </div>
              ))}
            </>
          ) : (
            <p>No entries!</p>
          )}
        </div>
      </div>

      <NewEntry />
    </div>
  );
};

export default InvestmentForm;
