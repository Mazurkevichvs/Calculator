import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import Button from './components/Button'

function App() {
  const [result, setResult] = useState('0');
  const operators = ['/', '*', '+', '-', '.'];
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  const addDigit = (digit) => {
    if(operators.includes(digit) && operators.includes(result.slice(-1))) return;
    if(result === '0' && digit ==='0') return;
    if(result === '0' && !operators.includes(digit)) {setResult(digit); return;}
    setResult(result + digit)    
  }

  const clear = (digit) => {
    if(digit === 'C') setResult('0')
    if(digit === 'CE' && result.length > 1) setResult(result.slice(0, -1))
  }

  const equal = () => {
    try {
      setResult(eval(result).toString())
    } catch {
      setResult("Error")
    }
    
  }

  return (
    <div className="wrapper">
      <div className={result?.length > 15 ? 'result minimize' : 'result'}>{result}</div>
      <Button className='operand' handleClick={clear} digit='C'/>
      <Button className='operand' handleClick={clear} digit='CE'/>
      <Button className='operand' handleClick={addDigit} digit='/'/>
      <Button handleClick={addDigit} digit='1'/>
      <Button handleClick={addDigit} digit='2'/>
      <Button handleClick={addDigit} digit='3'/>
      <Button className='operand' handleClick={addDigit} digit='*'/>
      <Button handleClick={addDigit} digit='4'/>
      <Button handleClick={addDigit} digit='5'/>
      <Button handleClick={addDigit} digit='6'/>
      <Button className='operand' handleClick={addDigit} digit='+'/>
      <Button handleClick={addDigit} digit='7'/>
      <Button handleClick={addDigit} digit='8'/>
      <Button handleClick={addDigit} digit='9'/>
      <Button className='operand' handleClick={addDigit} digit='-'/>
      <Button handleClick={addDigit} digit='.'/>
      <Button handleClick={addDigit} digit='0'/>
      <Button className='operand' handleClick={equal} digit='='/>
    </div>
  );
}

export default App;
