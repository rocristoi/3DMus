import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const [isCSRF, setCSRF] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const storedState = localStorage.getItem('spotify_state');

    if (state !== storedState) {
      setCSRF(true);
      return;
    }
    const fetchAccessToken = async () => {
      try {
        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: 'YOUR CALLBACK URL',
            client_id: 'YOUR CLIENT ID',
            client_secret: 'YOUR CLIENT SECRET',
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        const { access_token } = response.data;
        localStorage.setItem('spotify_access_token', access_token);
        navigate('/top-tracks');
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    if (code) fetchAccessToken();
  }, [searchParams, navigate]);

  return (
  <div className='h-screen w-screen bg-[#121212] flex items-center justify-center'>
      {isCSRF ? (
        <div className='flex flex-col items-center text-center'>
        <h2 className='text-red-500 font-black text-[30px]'>#3DMUS_CSRF</h2>
        <h2 className='text-gray-500 font-black text-[15px]'>This is an error</h2>
        <h2 className='text-gray-500 font-black text-[10px]'>Try logging in again or use another account</h2>

        </div>
      ) : (
        <h2 className='text-white font-black text-[20px]'>Processing your request...</h2>
      )}
  </div>)
};

export default Callback;
