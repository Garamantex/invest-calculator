import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"
import Results from "./components/Results"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1
  
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration of at least 1 year</p>}
      {inputIsValid && <Results userInput={userInput}/>}
    </>
  )
}

export default App
