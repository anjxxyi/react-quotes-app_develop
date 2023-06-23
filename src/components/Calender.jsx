import React from 'react'

const Calender = (props) => {
  const month = props.month;
  const date = props.date;
  const day = props.day;

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