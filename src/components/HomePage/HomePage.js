import React from 'react';
import BattingList from '../BattingList/BattingList';

const HomePage = () => {
  return (
    <div className="p-4      w-full min-w-full ">
      <section className="mt-20 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Welcome to Opinion Trading</h2>
        <p className="mb-4">Trade opinions and insights with others!</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Will Start Soon</button>
      </section>
      <BattingList />
    </div>
  );
};

export default HomePage;
