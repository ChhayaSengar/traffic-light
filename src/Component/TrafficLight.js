import React, { useState, useEffect } from 'react';
import './styles.css'; // Style sheet for the traffic light

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      switch (currentLight) {
        case 'red':
          setCurrentLight('green');
          break;
        case 'green':
          setCurrentLight('yellow');
          break;
        case 'yellow':
          setCurrentLight('red');
          break;
        default:
          break;
      }
    }, getIntervalDuration(currentLight));

    return () => clearInterval(interval);
  }, [currentLight]);

  const getIntervalDuration = (light) => {
    switch (light) {
      case 'red':
        return 4000;
      case 'yellow':
        return 500;
      case 'green':
        return 3000;
      default:
        return 0;
    }
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div className={`circle red ${currentLight === 'red' ? 'active' : ''}`} />
        <div className={`circle yellow ${currentLight === 'yellow' ? 'active' : ''}`} />
        <div className={`circle green ${currentLight === 'green' ? 'active' : ''}`} />
      </div>
    </div>
  );
};

export default TrafficLight;
