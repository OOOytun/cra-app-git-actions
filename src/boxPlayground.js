import React, { useEffect, useState } from 'react'

const BoxPlayground = () => {
  const [ballPosition, setBallPosition] = useState({ top: 0, left: 0 })

  const { top, left } = ballPosition

  const randomNumber = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(() => {
    setInterval(() => {
      setBallPosition({ top: randomNumber(0, 885), left: randomNumber(0, 885) })
    }, 3000);
  }, [])

  return (
    <div className='container'>
      <div className='ball' style={{ top, left }} />
    </div>
  )
}

export default BoxPlayground