import React from 'react'
import ImcCalc from './components/ImcCalc'
import imcTable from './components/imcTable'
import "./App.css"
import {data} from  ".data/data"
import { useState } from 'react'


function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if(!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat).toFixed(1));

    setImc(imcResult);
  };

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (
    <div className="container">
        {!imc ? <ImcCalc calcImc={calcImc}/> : <imcTable data={data} />}
    </div>
  )
}

export default App
