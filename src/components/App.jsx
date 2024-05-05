import React, { useState } from 'react';
import { Feedback } from './Feedback';
import { Statistics } from "./Statistics";

export const App = () => {
  const [ good, setGood ]= useState(0)
  const [ neutral, setNeutral ]= useState(0)
  const [bad, setBad] = useState(0)
  const [value, setValue] = useState(0)
  const [result] = useState(0)


    const onIncrementClickGood = () => {
      setGood(prevValue => prevValue + 1)
    }  
    
    const onIncrementClickNeutral = () => {
        setNeutral(prevValue =>prevValue+1)
    } 
    
    const onIncrementClickBad = () => {
        setBad(prevValue =>prevValue+1)
    }  
    
    const countTotalFeedback=() => {
      setValue(prevValue => prevValue + 1)
    }
  
  return (
    <>
      <Feedback good={good} value={value} result={result} onIncrementClickGood={onIncrementClickGood} onIncrementClickNeutral={onIncrementClickNeutral} onIncrementClickBad={onIncrementClickBad} totalClick={countTotalFeedback} />
      <Statistics good={good} neutral={neutral} bad={bad} value={value} result={result} />
    </>
  );
};
