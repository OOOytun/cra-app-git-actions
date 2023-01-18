import React, { useEffect, useState } from 'react'

const BoxPlayground = () => {
  const [ballProperties, setBallProperties] = useState({ top: 0, left: 0, color: 'red' })

  const { top, left, color } = ballProperties

  const randomNumber = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  const randomColor = () => {
    var colorCode = Math.floor(Math.random() * 16777215).toString(16);
    console.log(colorCode)
    return `#${colorCode}`
  }

  useEffect(() => {
    setInterval(() => {
      setBallProperties({ top: randomNumber(0, 885), left: randomNumber(0, 885), color: randomColor() })
    }, 3000);
  }, [])

  return (
    <div className='container'>
      <div className='ball' style={{ top, left, background: color }} />
    </div>
  )
}

export default BoxPlayground