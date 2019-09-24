import React, { useState } from 'react';
import './App.css';
import PhotoCapture from './components/PhotoCapture/PhotoCapture';
import Colors from './components/Colors.js';
function App() {
  const [imgSrc, setimgSrc] = useState('');

  const onTakePicture = imageSrc => setimgSrc(imageSrc);
  return (
    <div className="App">
      <img id="image_data" src={imgSrc} style={{ height: '100px' }} />
      <PhotoCapture onTakePicture={onTakePicture} />
      <Colors />
    </div>
  );
}
export default App;
