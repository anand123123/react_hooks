import React, { useState, useEffect } from "react";
import { CgMenuBoxed } from 'react-icons/cg';
import User from "./User";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  const [fruit, updateFruit] = useState('apple');

  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("component did update");
  });

  useEffect(() => {
    console.log("component should update");
  }, [fruit]);

  return (
    <div className="App">
    <CgMenuBoxed/>
      <header className="App-header">
        {count < 1 && <User/>}{' '}have
        <div>{count} {fruit}</div>
        <div
          onClick={() => {
            const increment = count + 1;
            setCount(increment);
            if(increment > 1){
              updateFruit('apples')
            }
          }}
        >
          click
        </div>
      </header>
    </div>
  );
}

export default App;