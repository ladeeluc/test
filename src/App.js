import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [items, itemsSet] = useState([])
  const [inputValue, inputValueSet] = useState(null)

  console.log("this is input value", inputValue)
  console.log("this is items", items)

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input type ="text" value={inputValue} onChange = {
        (evt) => { 
          inputValueSet(evt.target.value) 
 
        }
      }
      />
      <button onClick = {
        () => {
          itemsSet([...items, inputValue])
          inputValueSet("")
        }
      }
       > add Todo</button>
       <div>
         <ul>
           {items.map((item, index) => {
             return (
               <li
               style = {
                 {
                   fontSize: 24
                 }
               }
               >{item}
               <button onClick = {
                 () => {
                  itemsSet([
                    ...items.slice(0, index),
                    ...items.slice(index, items.length)
                  ])
                 }
               }    > delete to do </button>
               </li>
             )
           }
           ) }
         </ul>
       </div>
    </div>
  );
}

export default App;
