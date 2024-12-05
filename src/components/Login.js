import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Login = () => {
  const [authUrl, setAuthUrl] = useState('');
  const clientId = 'YOUR CLIENT ID HERE';
  const redirectUri = 'YOUR WEBSITE URL HERE';
  const scope = 'user-top-read';
  const state = Math.random().toString(36).substring(7); 

  useEffect(() => {
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${state}`;
    setAuthUrl(url);
    localStorage.setItem('spotify_state', state); 
  }, []);

  return (
    <div className='w-screen h-screen bg-[#121212] flex flex-col items-center justify-center'>
        <div className='h-[500px] w-[500px] bg-[#000d1c] rounded-xl flex flex-col'>
          <div className='mt-5  flex flex-col h-max  items-center text-center'> 
            <h2 className='text-white font-black text-[40px]'>Welcome</h2>
            <span className='text-white font-bold leading-tight'>Please log in with your spotify account</span>
          </div>
          <div className='mt-20 flex flex-col h-max items-center justify-center'>
          {authUrl && (
            <a href={authUrl}>
              <motion.div className='w-40 h-10 bg-white rounded-xl flex flex-row'
                whileHover={{ scale: 1.1, color: "rgb(30,215,96)" }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  opacity: { duration: 1 }, 
                  scale: { duration: 0.2 },
                }}
              >
                <div className='w-1/4 flex items-center justify-center'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/71/Spotify.png' className='h-5 w-5'></img>
                </div>
                <div className='flex items-center justify-center'>
                <h2 className='font-black text-[12px]'>Login with Spotify</h2>
                </div>

              </motion.div>
            </a>
          )}

          <motion.h2 className='font-black text-white mt-5'
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1, delay: 0.5 }} 
          >Or..</motion.h2>
          <a href='/top-tracks-test'>
              <motion.div className='w-40 h-10 bg-white rounded-xl flex items-center justify-center mt-5'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  opacity: { duration: 1, delay: 1 }, 
                  scale: { duration: 0.2 } 
                }} >
                <h2 className='font-black text-[12px]'>Test things out</h2>

              </motion.div>
            </a>
          </div>
          <div className="flex flex-col items-center leading-tight mt-20">
                    <h2 className='text-white'>Developed by <span className="text-red-500 font-bold">@rocristoi</span></h2>
                   <a href="https://github.com/rocristoi/3DMus"> <h2 className="text-blue-500">Contribute to this project on Github</h2></a>
                  </div>
        </div>
    </div>
  );
};

export default Login;
