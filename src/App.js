import React, {useState} from 'react';
import './App.css';
import FloatingButton from "./FloatingButton";

function App() {
    const [number, setNumber] = useState(6)
    const [right, setRight] = useState(true)
    const [top, setTop] = useState(false)
  return (
    <div className="App-header">
      <FloatingButton
          number={number}
          right={right}
          top={top}
      />
      <div style={{display: "flex"}}>
        <button
            onClick={()=> setNumber(number + 1)}
            style={{ height: '50px', width: '50px', fontSize: '32px', borderRadius: '10px', marginRight: '32px'}}
        > + </button>
        {number}
        <button onClick={()=> setNumber(number <= 2 ? number : number - 1)}
                style={{ height: '50px', width: '50px', fontSize: '32px', borderRadius: '10px', marginLeft: '32px'}}
        > - </button>
          <label>
              <input
                  style={{ height: '30px', width: '30px', fontSize: '32px', borderRadius: '10px', marginLeft: '32px'}}
                  type="checkbox" data-toggle="toggle"
                  checked={right}
                  onChange={e=>{setRight(e.target.checked)}}
              />
              Right
          </label>
          <label>
              <input
                  style={{ height: '30px', width: '30px', fontSize: '32px', borderRadius: '10px', marginLeft: '32px'}}
                  type="checkbox" data-toggle="toggle"
                  value={top}
                  onChange={e=>{setTop(e.target.checked)}}
              />
              Top
          </label>
      </div>

    </div>
  );
}

export default App;
