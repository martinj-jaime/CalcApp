/* eslint no-eval: 0 */
import React, { useState, FC } from 'react';
import words from 'lodash.words'
import { Result, MathOperations, Functions, Numbers } from './components/index'
import './App.css';

const App: FC = () => {  

  const [text,setText] = useState('')

  const items = words(text, /[^-^+^*^/]+/g)
  const value = items.length > 0 ? items[items.length-1] : '0'; 

  return (
    <main className='calculator'>
      <Result value={value} />
      
      <Numbers 
        onClickNumber={(number: any) => setText(`${text}${number}`)} 
      />

      <Functions 
        onContentClear={() => setText('')}
        onDelete={() => {
          if(text.length > 0) {
            const newText = text.substring(0, text.length -1)
            setText(newText) 
          }
        }}
      />

      <MathOperations 
        onClickOperations={(operation: any) => {setText(`${text}${operation}`)}}
        onClickEqual={() => {
          if(text!==null) {
            setText(eval(text).toString())
          } 
        }} 
      />
    </main>
  );
};

export default App;
