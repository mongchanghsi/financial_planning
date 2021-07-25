import React, { useContext } from 'react';
import { AppContext } from '../../context';

interface IProps {
  data: {
    id: string;
    name: string;
    currentValue: number;
    annualDeposits: number;
    interestRate: number;
    years: number;
  };
}

const IndividualEntry: React.FC<IProps> = ({ data }) => {
  const { removeEntry } = useContext(AppContext);

  return (
    <div className='investment_entry'>
      <p className='investment_entry-text'>{data.name}</p>
      <p className='investment_entry-text'>{data.currentValue}</p>
      <p className='investment_entry-text'>{data.annualDeposits}</p>
      <p className='investment_entry-text'>{data.interestRate}</p>
      <p className='investment_entry-text'>{data.years}</p>
      <button
        className='investment_entry_deletebutton'
        onClick={() => removeEntry(data.id)}
      >
        <svg
          className='investment_delete'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default IndividualEntry;
