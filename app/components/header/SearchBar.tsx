'use client';
import { SearchIcon, UsersIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file\
// import { format } from 'date-fns';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  // const v = `start:${format(startDate, 'dd/MM/yyyy')} - End:${format(endDate, 'dd/MM/yyyy')}`;

  return (
    <div>
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          type='text'
          placeholder='Start your search'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none'
        />
        <SearchIcon
          className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'
        />
      </div>

      {input && (
        <div className='absolute top-[100%] left-[50%] translate-x-[-50%] bg-white h-[500px] overflow-y-scroll shadow-lg'>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={['#FD5B61']}
            minDate={new Date()}
            months={2}
            moveRangeOnFirstSelection={false}
            // direction='horizontal'
          />

          <div className='flex items-center border-b mb-4 pl-4'>
            <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
            <UsersIcon className='h-5' />
            <input
              type='number'
              className='w-12 pl-2 text-lg outline-none text-red-500'
              min={1}
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
            />
          </div>

          <div className='flex items-center justify-between p-4'>
            <button
              type='button'
              className=' text-gray-500'
              onClick={() => setInput('')}
            >
              Cancel
            </button>
            <Link href='/' className=' text-red-400'>
              Search
            </Link>
          </div>
        </div>
      )}
    </div>
  )
};

export default SearchBar