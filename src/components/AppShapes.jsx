import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import apple from '../build/assets/landing_img/apple.webp';
import playstore from '../build/assets/landing_img/playstore.webp';

function App_shapes() {
  return (
    <div class="app-shapes d-flex  " style={{gap:20,marginBottom:"20px"}}>
            <div>
                <LazyLoadImage effect='blur' height={50} src={apple} alt="apple"/>
            </div>
            <div>
                <LazyLoadImage effect='blur' height={50} src={playstore} alt="playstore"/>
            </div>
        </div>
  )
}

export default App_shapes