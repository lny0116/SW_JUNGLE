import { useState } from "react";

const Converter = ()=>{
    const [Amount, setAmount] = useState(0);
    const [Inverted, setInverted] = useState(false);

    const ChangeInput = (e)=>{
        // console.log(e.target.value)
        setAmount(e.target.value)
    }
    const ChangeInverted = ()=>{
        setAmount(()=>setAmount(0));
        setInverted((current)=>!current);
    }

    return (
        <div>
            <h2>hey~ converter</h2>
            <div>
                <label style={{cursor: 'pointer'}} htmlFor="min">Min: </label>
                <input disabled={Inverted} value={Inverted ? Amount*60 : Amount} id="min" placeholder="Minutes" type='number' onChange={ChangeInput}/>
                {/* onChange 함수는 데이터를 업데이트 해주는 역할을 함 */}
                {/* 삼항연산자를 이용해 if flipped 상태라면 state에 있는값을 그대로 보여주게*/}
                <p></p>
                <label style={{cursor: 'pointer'}} htmlFor="hours">Hours: </label>
                <input disabled={!Inverted} value={Inverted ? Amount : Math.round(Amount/60)} id="hours" placeholder="Hours" type='number' onChange={ChangeInput}/>
                {/* math.round는 반올림하는 거 */}
                <p></p>
                <button onClick={()=>{setAmount(0)}}>reset</button>
                <button onClick={ChangeInverted}>{Inverted ? 'turn back' : 'invert'}</button>
            </div>
        </div>
    )
}

export default Converter;