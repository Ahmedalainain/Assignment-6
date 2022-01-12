import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import ZipCode from './zip-code';

function App() {
  const [zip, setZip] = useState("10021")
  const [list, setList] = useState([])
  return (
    <div className="App">
      <ZipCode zip={zip} list={list} setList={setList} setZip={setZip}/>
    </div>
  );
}

export default App;
