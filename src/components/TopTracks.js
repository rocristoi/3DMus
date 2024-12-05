import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Sky } from '@react-three/drei';
import BaseScene from '../ui/BaseScene';
import BaseBox from '../ui/BaseBox';
import BaseCharacter from '../ui/BaseCharacter';

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      const token = localStorage.getItem('spotify_access_token');
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.items);
        setTracks(response.data.items);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    fetchTopTracks();
  }, []);

const pos = [
  {
   position: [-8, 1, 12]
  },
  {
    position: [5, 1, 10]
  },
  {
    position: [-3, 1, 15]
  },
  {
    position: [12, 1, -8]
  },
  {
    position: [2, 1, 4]
  },
  {
    position: [-10, 1, -5]
  },
  {
    position: [0, 1, 20]
  },
  {
    position: [7, 1, 2]
  },
  {
    position: [3, 1, -7]
  },
  {
    position: [12, 1, -8]
  },
  {
    position: [4, 1, -8]
  },

];

  return (
    <BaseScene>

          {tracks.slice(0, 9).map((track, index) => {
            const textureUrl = track?.album?.images?.[0]?.url || 'noImg.jpg';
            const position = pos[index].position || [0, 0, 0]; 
            const artists = track.artists.map((artist) => artist.name)
            return (
              <BaseBox
                key={track.id}
                text={false}
                position={position}
                args={[2, 2, 2]}
                color="white"
                textureUrl={textureUrl}
                name={track.name}
                artists={artists}
                number={index}
              />
            );
          })}
      <BaseCharacter controls position={[0, 1, 12]} args={[0.5]} color="yellow" />
      <Sky />
    </BaseScene>
  );
};

export default TopTracks;
