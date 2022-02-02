import { React } from 'react';
import { Result, MathOperations, Functions, Numbers } from './components/index'
import './App.css';

const App = () => {  
  return (
    <main className='calculator'>
      <Result />
      
      <Numbers onClickNumber={number => console.log(number)} />

      <Functions 
        onContentClear={() => console.log('onContentClear')}
        onDelete={() => console.log('onDelete')}
      />

      <MathOperations 
        onClickOperations={operation => console.log("operacion:", operation)}
        onClickEqual={equal => console.log("equal:", equal)} 
      />
    </main>
  );
};

export default App;
