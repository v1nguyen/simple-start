import pic0 from './components/images/pic0.jpg';
import pic1 from './components/images/pic1.jpg';
import pic2 from './components/images/pic2.jpg';
import pic3 from './components/images/pic3.jpg';
import pic4 from './components/images/pic4.jpg';
import pic5 from './components/images/pic5.jpg';
import pic6 from './components/images/pic6.jpg';
import pic7 from './components/images/pic7.jpg';
import pic8 from './components/images/pic8.jpg';
import pic9 from './components/images/pic9.jpg';
import pic10 from './components/images/pic10.jpg';
import pic11 from './components/images/pic11.jpg';

import logo from './logo.svg';
import Slideshow from './components/Slideshow';
import Menu from './components/Menu';
import './App.css';

import React from 'react';

const delay = 25000;
const images = [pic0, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11];  

function App() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div class="backgrd" style={ { backgroundImage: `url(${images[index]})`} }>
      <div>
        <Menu/>
      </div>
    </div>
  );
}

export default App;
