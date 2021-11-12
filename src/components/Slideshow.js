import pic0 from './images/pic0.jpg';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';
import pic5 from './images/pic5.jpg';
import pic6 from './images/pic6.jpg';
import pic7 from './images/pic7.jpg';
import pic8 from './images/pic8.jpg';
import pic9 from './images/pic9.jpg';
import pic10 from './images/pic10.jpg';
import pic11 from './images/pic11.jpg';
import './Slideshow.css'


import React from 'react';


const delay = 25000;
const images = [pic0, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11];  

function Slideshow() {
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
    <img className="bg" key={index} src={images[index]}/> 
  );
}

export default Slideshow;