import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {

  const [userInput,setUserInput] = useState({
    initialInvestment:1000,
    annualInvestment:12000,
    expectedReturn:6,
    duration:10
});

const inputIsValid= userInput.duration>=1;
function handleChange (inputIdentifier , newValue) {
  setUserInput ((preUserInput) => {
    return {
        ...preUserInput,
        [inputIdentifier]: +newValue
    }
  })
}

  return (
    <>
      <Header/>
      <div className="main_container">
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">please enter valid duration...</p>}
      {inputIsValid && <Results input={userInput}/>}
      </div>
    </>
  )
}

export default App
