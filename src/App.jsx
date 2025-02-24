import React, { useState } from 'react'

const App = () => {
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');

  const changeHandler = (e) => {
    setCity(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setCity('');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response => response.json()
    ).then(data => {
      const kelvin = data.main.temp;
      const celsius = kelvin - 273.15;
      setResult("Temparature at" + " " + city + '\n' + Math.round(celsius) + '▫C');
    })
  }
  return (
    <div>
      <center>
        <div className="card w-50 mt-5">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={submitHandler}>
              <input type="text" name='city' value={city} className='mt-2' onChange={changeHandler} /><br /><br />
              <input type="submit" value='Get Temparature' className='btn btn-success' />
            </form>
            <h3 className='mt-3'>{result}</h3>
          </div>
        </div>
      </center>
    </div>
  )
}


export default App