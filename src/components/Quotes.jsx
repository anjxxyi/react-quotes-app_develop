import React, { useEffect, useState } from 'react'

const Quotes = () => {
  const quotes  = [
    {name: 'Mark Twain', dataKR: '당신의 인생에서 가장 중요한 두 날은 당신이 태어난 날과 그 이유를 찾는 날이다.', dataEN: 'The two most important days in your life are the day you are born and the day you find out why.'}, 
    {name: 'Thomas A. Edison', dataKR: '많은 인생의 실패는 사람이 포기할 때 자신이 성공에 얼마나 가까이 있는지 깨닫지 못하는 것이다.', dataEN: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.'}, 
    {name: 'Nelson Mandela', dataKR: '인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.', dataEN: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'}, 
    {name: 'Bruce Lee', dataKR: '어떤 일에 너무 많은 시간을 걸리면, 당신은 그것을 완성하지 못할 것이다.', dataEN: 'If you spend too much time thinking about a thing, you’ll never get it done.'}, 
    {name: 'Alexander Pope', dataKR: '사람들과의 인연에서 사랑이란 공기처럼 가벼운 것이다. 가벼운 날개를 활짝 펴고 순식간에 날아간다.', dataEN: 'Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies.'}
  ]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let textTimeout = setTimeout(() => {
      setIndex(index + 1);
      if(index == quotes.length - 1) {
        setIndex(0);
      }
    }, 5000);
    return () => clearTimeout(textTimeout);
  }, [index]);
  console.log(quotes[index]);

  return (
    <div className="quotesSection">
      <p className="text KR">
        {quotes[index].dataKR}
      </p>
      <p className="text EN">
        {quotes[index].dataEN}
      </p>
      <p className="name">{quotes[index].name}</p>
    </div>
  )
}

export default Quotes