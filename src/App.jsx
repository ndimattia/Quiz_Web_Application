import './App.css'
import Button from './Button'
import {useState} from 'react'


function App() {

  const buttonLabels = ["Alpha", "Bravo", "Charlie"]

  const [smiley, setSmiley] = useState("neutral")

  const myHandler = (event) => {
    const clickedLabel = event.target.innerHTML
    if(clickedLabel === "Alpha") {
      setSmiley("happy")
    } else {
      setSmiley("sad")
    }
    console.log(clickedLabel)
  }
  
  return (
    <>
      <h1>Willkommen zum WISS Quiz</h1>
      <div>
        <img src={
          smiley === "happy" 
          ? "../public/img/smile.png" 
          : smiley == "sad" 
          ? "../public/img/sad.png"
          : "../public/img/neutral.png"
        }
        alt="Smiley"
        />
      </div>
      <div>
        {buttonLabels.map((label, index) => (
          <Button key={index} label={label} handler={myHandler} />
        ))}
      </div>
    </>
  )
}

export default App