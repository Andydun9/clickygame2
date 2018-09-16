import React from 'react'
import logo from './logo.jpeg'
import BeanImage from "./BeanImage"

let score = 0
const App = () => (
  <div>
  <header>
<img src={logo} alt="logo" />
<h1>Clicky Game</h1>
<h2>The goal of this game is to select a picture. Each photo you select will give you a point. If you select the same photo twice the game will end. See how many points that you can get!</h2>
<h3>Score</h3>
<p>{score}</p>
  </header>
  <body>
  {/* <img src={Bean} alt="Picture of Bean" /> */}
  <BeanImage />

  </body>
  </div>
);



export default App;

