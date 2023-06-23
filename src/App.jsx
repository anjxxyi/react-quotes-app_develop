import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Calender from './components/Calender'
import Quotes from './components/Quotes'

function App() {
  let now = new Date();
  const [month,setMonth] = useState(now.getMonth() + 1); 
  const [date,setDate] = useState(now.getDate()); 
  const [day,setDay] = useState(now.toLocaleString('en-US', {weekday: 'short'}).toUpperCase()); 

  useEffect(() => {
    setMonth(month);
    setDate(date);
    setDay(day);

    let timeInerval = setInterval(() => setDate(date), 1000);
    return () => clearInterval(timeInerval);
  }, [date]);

  return (
    <div className="App">
      <Header />
      <div id="Container">
        <Quotes />
        <Calender 
          month={month}
          date={date}
          day={day}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
