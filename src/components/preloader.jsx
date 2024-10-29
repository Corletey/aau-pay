import React, { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import aauLogo from '../assets/images/logo.png';

const RoundPreloader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-40 h-40">
          <div 
            className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-[#393464] border-t-transparent animate-spin"
            style={{ width: '100%', height: '100%' }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={aauLogo} alt="AAU Logo" className="rounded-full w-20 h-20" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-[#393464] mt-6">Loading...</h2>
        <div className="mt-4 flex items-center justify-center">
          <Loader className="animate-spin text-[#393464] mr-2" size={24} />
          <span className="text-[#393464] text-lg">{loadingProgress}%</span>
        </div>
      </div>
    </div>
  );
};

export default RoundPreloader;