import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {

  const [mile, setMile] = useState(0);
  const [kilometer, setKilometer] = useState(0);
  const [meter, setMeter] = useState(0);
  const [yard, setYard] = useState(0);
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [centimeter, setCentimeter] = useState(0);
  const [inches, setInches] = useState(0);

  const imperialRowStyle = "flex flex-row items-baseline gap-2 justify-between pr-2";
  const metricRowStyle = "flex flex-row items-center justify-between";

  useEffect(() => {
    const convertKilometer = () => {
      if (kilometer === 0) {
        setMile(0);
      } else {
        setMile((kilometer * 0.621371).toFixed(2));
      }
    }
    convertKilometer();
    const convertMeter = () => {
      if (meter === 0) {
        setYard(0);
      } else {
        setYard((meter * 0.9144).toFixed(2));
      }
    }
    convertMeter();
    const convertCelsius = () => {
      if (celsius === 0) {
        setFahrenheit(0);
      } else {
        setFahrenheit((celsius * 1.8 + 32).toFixed(2));
      }
    }
    convertCelsius();
    const convertCentimeter = () => {
      if (centimeter === 0) {
        setInches(0);
      } else {
        setInches((centimeter * 2.54).toFixed(2));
      }
    }
    convertCentimeter();
  }, [kilometer, meter, celsius, centimeter])

  return (
    <main className="w-screen h-screen bg-black text-white flex flex-col items-center">
  
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }}    // Animation to perform
        transition={{ duration: 2 }}      // Animation duration
      >
        <section className='flex flex-col items-center'>
          <h1 className="text-4xl font-bold pt-3 animate-pulse text-purple-400">Measurement Conversion</h1>     
          <h1 className='text-3xl italic mt-3'>Metric to Imperial</h1>
        </section>
      </motion.div>

      {/* 2 Seperate columns */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }}    // Animation to perform
        transition={{ duration: 2 }}      // Animation duration
      >
      <section className='w-screen flex flex-row gap-3 mt-5 pt-3 pl-2 pr-2 items-center justify-center'>
          
          {/* Metric column */}
          <div className='border-2 w-72 pl-2 pr-2 rounded-2xl pb-2 pt-1 text-4xl'>
            
            <h1 className='text-sm'>Metric (Global)</h1>

            <div className={metricRowStyle}>
              <h1 className='pr-2'>Kilometer</h1>
              <div className={metricRowStyle}>
                <div className={metricRowStyle}>
                  <button className='' onClick={() => setKilometer(kilometer + 1)}>+</button>
                  <button className='' onClick={() => setKilometer(kilometer - 1)}>-</button>
                </div>
                <h1 className='w-12 pl-2'>{kilometer}</h1>
              </div>
            </div>

            <div className={metricRowStyle}>
              <h1 className='pr-2'>Meter</h1>
              <div className={metricRowStyle}>
                <div className={metricRowStyle}>
                  <button className='' onClick={() => setMeter(meter + 1)}>+</button>
                  <button className='' onClick={() => setMeter(meter - 1)}>-</button>
                </div>
                <h1 className='w-12 pl-2'>{meter}</h1>
              </div>
            </div>

            <div className={metricRowStyle}>
              <h1 className='pr-2'>C°</h1>
              <div className={metricRowStyle}>
                <div className={metricRowStyle}>
                  <button className='' onClick={() => setCelsius(celsius + 1)}>+</button>
                  <button className='' onClick={() => setCelsius(celsius - 1)}>-</button>
                </div>
                <h1 className='w-12 pl-2'>{celsius}</h1>
              </div>
            </div>

            <div className={metricRowStyle}>
              <h1 className=''>Cm <span className=' text-xs'>I.e. centimeter</span></h1>
              <div className={metricRowStyle}>
                <div className={metricRowStyle}>
                  <button className='' onClick={() => setCentimeter(centimeter + 1)}>+</button>
                  <button className='' onClick={() => setCentimeter(centimeter - 1)}>-</button>
                </div>
                <h1 className='w-12 pl-2'>{centimeter}</h1>
              </div>
            </div>
          
          </div>

          {/* Imperial column */}
          <div className='border-2 w-72 pl-2 pr-2 rounded-2xl pb-2 pt-1 text-4xl'>
            
            <h1 className='text-sm'>Imperial (US & UK)</h1>

            <div className={imperialRowStyle}>
              <h1>Mile</h1>
              <h1>{mile}</h1>
            </div>

            <div className={imperialRowStyle}>
              <h1>Yard</h1>
              <h1>{yard}</h1>
            </div>

            <div className={imperialRowStyle}>
              <h1>F°</h1>
              <h1>{fahrenheit}</h1>
            </div>

            <div className={imperialRowStyle}>
              <h1>Inches</h1>
              <h1 className='text-2xl'>{inches}</h1>
            </div>

          </div>

      </section>
      </motion.div>

    </main>
  );
}

export default App;
