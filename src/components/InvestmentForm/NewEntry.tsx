import React, { useState, useContext } from 'react';
import { AppContext } from '../../context';

interface IEntry {
  name: string;
  currentValue: number;
  annualDeposits: number;
  interestRate: number;
  years: number;
}

const defaultEntry = {
  name: '',
  currentValue: 0,
  annualDeposits: 0,
  interestRate: 0,
  years: 0,
};

const NewEntry = () => {
  const { addEntry } = useContext(AppContext);
  const [data, setData] = useState<IEntry>(defaultEntry);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitEntry = () => {
    addEntry(data);
    setData(defaultEntry);
  };

  return (
    <div className='investment_new_entry_container'>
      <p>Name of Investment</p>
      <input
        name='name'
        type='text'
        className='investment_new_entry_input'
        value={data.name}
        onChange={(e) => handleChange(e)}
      />
      <div className='investment_new_entry-grid'>
        <div>
          <p>Current Value (SGD)</p>
          <input
            name='currentValue'
            type='number'
            className='investment_new_entry_input'
            value={data.currentValue}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <p>Annual Deposits (SGD)</p>
          <input
            name='annualDeposits'
            type='number'
            className='investment_new_entry_input'
            value={data.annualDeposits}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div className='investment_new_entry-grid'>
        <div>
          <p>Annual Interest Rate</p>
          <input
            name='interestRate'
            type='number'
            className='investment_new_entry_input'
            value={data.interestRate}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <p>Duration (years)</p>
          <input
            name='years'
            type='number'
            className='investment_new_entry_input'
            value={data.years}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <button className='investment_new_entry_button' onClick={submitEntry}>
        ADD
      </button>
    </div>
  );
};

export default NewEntry;
