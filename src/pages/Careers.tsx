import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl font-bold text-black mb-6">Careers at Rostram</h1>
        <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
          We're always looking for talented, passionate people to join our team. Check back soon for open positions, or reach out to us at <a href="mailto:careers@rostram.com" className="text-red-600 underline">careers@rostram.com</a>.
        </p>
        <div className="bg-gray-100 rounded-xl p-8 text-center shadow-md">
          <span className="text-gray-500">No open positions at this time.</span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers; 