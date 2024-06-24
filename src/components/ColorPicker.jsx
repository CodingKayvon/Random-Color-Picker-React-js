import React, { useEffect, useState } from 'react'
import './ColorPicker.css'

const ColorPicker = () => {
const colorArray = ["#6E260E", "#89CFF0", "#5F8575", "#C0C0C0", "#FFD700", "#800080", "#FFC0CB"]
const [color, setColor] = useState("#7393B3")


const handleClick = () => {
  let colors = Math.floor(Math.random() * 7);
  let text = Math.floor(Math.random() * 7);

  let randomColor = colorArray[colors];
  setColor(randomColor);
}



  return (
    <div className='ColorPicker-w'>
      <header className='ColorPicker-h'>
        <img src="moonfix-r.png" alt="logo" />
        <h1>30 Projects in React</h1>
        <h2>Project 3: Color Picker</h2>
      </header>

      <button className='ColorBtn'
        onClick={()=> handleClick()}
        style={{backgroundColor: color, color: 'black'}}
      >
        Click Me
      </button>

    </div>
  )
}

export default ColorPicker