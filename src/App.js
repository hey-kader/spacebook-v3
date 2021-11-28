import React, {useState, useEffect} from 'react'
import './App.css';
import Button from 'react-bootstrap/Button'

function App() {

  const [toggle, setToggle] = useState("signup")
  useEffect ( () => {
      if (toggle == "signup") {
          document.getElementById("pw").style.display = "none"
      }
      else {
          document.getElementById("pw").style.display = "inline-block"
      }
  })

  return (
    <div className="App">
        <h1>spacebook</h1>
        {
        <>
            <Button variant="primary" onClick={() => {setToggle("signup")}}>
           sign up
        </Button>
            <Button variant="secondary" onClick={() => {setToggle("login")}}>
          login 
        </Button>
        </>
        }
        <br />
        <input placeholder="john@spacebook.com" />
        <br />
        <input id="pw" type="password" placeholder="password" />
        <br />
    </div>
  );
}

export default App;
