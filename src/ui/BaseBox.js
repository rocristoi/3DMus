import { useBox } from '@react-three/cannon';
import { TextureLoader } from 'three';
import { CanvasTexture } from 'three';
import { useLoader } from '@react-three/fiber';

function createTextTexture(title, artists) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'black';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(title, canvas.width / 2, 100);

  const artistList = Array.isArray(artists) ? artists : artists.split(','); // Convert to array if not already
  const startY = 200; 
  const lineHeight = 40; 

  ctx.font = '30px Arial'; 
  artistList.forEach((artist, index) => {
    const y = startY + index * lineHeight; 
    ctx.fillText(artist.trim(), canvas.width / 2, y);
  });

  return new CanvasTexture(canvas);
}

function createNumberCanvas(number) {
  const canvas = document.createElement('canvas');
  const size = 512; 
  
  canvas.width = size;
  canvas.height = size;
  
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, size, size);
  
  // Set the text properties
  ctx.fillStyle = 'black'; 
  ctx.font = 'bold 60px Arial'; 
  ctx.textAlign = 'center'; 
  ctx.textBaseline = 'middle'; 
  
  ctx.fillText("#"+number, size / 2, size / 2);
  
    return new CanvasTexture(canvas);
  ;
}


const BaseBox = ({ number, name, artists, textureUrl, ...props }) => {
  const [ref] = useBox((index) => ({
    type: 'Static',
    mass: 1,
    onCollide: (e) => {
      console.log(e);
    },
    ...props,
  }));

  const texture = useLoader(TextureLoader, textureUrl);
  const artistText = createTextTexture('Artist', artists);
  const songNameText = createTextTexture('Song Name', name)
  const topNumber = createNumberCanvas(number+1)
  return (
    <mesh castShadow position={props.position} ref={ref}>
      <boxGeometry args={props.args} />
      <meshStandardMaterial attach="material-0" map={artistText} /> {/* Front face */}
      <meshStandardMaterial attach="material-1" map={topNumber} /> {/* Back face */}
      <meshStandardMaterial attach="material-2" color={props.color || 'gray'} /> {/* Top face */}
      <meshStandardMaterial attach="material-3" color={props.color || 'gray'} /> {/* Bottom face */}
      <meshStandardMaterial attach="material-4" map={texture} /> {/* Left face */}
      <meshStandardMaterial attach="material-5" map={songNameText} /> {/* Right face */}
    </mesh>
  );
};

export default BaseBox;