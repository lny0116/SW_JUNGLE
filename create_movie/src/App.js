import './App.css';
import {useState} from 'react'
// import ClickLike from './components/ClickLike'
import Converter from './components/Converter'
import ConverterMiles from './components/ConverterMiles';

function App() {
  const [Index, setIndex] = useState('x');
  const SelectChange = (e)=>{
    // console.log(e.target.value)
    setIndex(e.target.value)
  }

  return (
    <main style={{textAlign: 'center'}}>
      <h1>ok😏</h1>
      <select value={Index} onChange={SelectChange} style={{cursor:'pointer'}}>
        <option value='x'>Select converter</option>
        <option value='0'>Time converter</option>
        <option value='1'>Km or Miles</option>
      </select>
      <hr></hr>
      {/* <ClickLike></ClickLike> */}
      {Index === 'x' ? `please select converter`: null}
      {Index === '0' ? <Converter></Converter>: null}
      {Index === '1' ? <ConverterMiles></ConverterMiles>: null}
      {/* ↑ 이렇게 중괄호를 열고 적어야지 js문법을 쓸 수 있음! */}
    </main>
  );
}

export default App;