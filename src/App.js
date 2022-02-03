/* eslint no-eval: 0 */
import React, { useState } from 'react';
import words from 'lodash.words'
import { Result, MathOperations, Functions, Numbers } from './components/index'
import './App.css';

const App = () => {  

  const [text,setText] = useState('')

  const items = words(text, /[^-^+^*^/]+/g)

  console.log('Renderizacion de la app', items);

  const value = items.length > 0 ? items[items.length-1] : '0'; 

  return (
    <main className='calculator'>
      <Result value={value} />
      
      <Numbers 
        onClickNumber={number => { 
          console.log(number) 
          setText(`${text}${number}`)
        }} 
      />

      <Functions 
        onContentClear={() => {
          console.log('onContentClear')
          setText('')
        }}
        onDelete={() => {
          if(text.length > 0) {
            console.log('onDelete')
            const newText = text.substring(0, text.length -1)
            setText(newText) 
          }
        }}
      />

      <MathOperations 
        onClickOperations={operation => {
          console.log("operacion:", operation)
          setText(`${text}${operation}`)
        }}
        onClickEqual={equal => {
          console.log("equal:", equal)
          if(text!==0) {
            setText(eval(text).toString())
          } 
        }} 
      />
    </main>
  );
};

export default App;
