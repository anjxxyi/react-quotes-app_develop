import React from 'react'

const Calender = ({month, date, day}) => {
  return (
    <div className="calenderSection">
        <div className="todayArea">
            <p className="day">{day}</p>
            <p className="date">{month}/{date}</p>
        </div>
        <div className="btnArea">
            <button onClick={() => alert('Coming soon')}>MORE VIEW</button>
        </div>
    </div>
  )
}

export default Calender