import { useState } from "react";

const ConverterMiles = ()=>{
    const [Amount2, setAmount2] = useState(0);
    const [Inverted2, setInverted2] = useState(false);

    const ChangeInput2 = (e)=>{
        setAmount2(e.target.value)
    }
    const ChangeInverted2 = ()=>{
        setAmount2(()=>{setAmount2(0)})
        setInverted2((current)=>!current)
    }

    return (
        <div>
            <h2>km 2 miles</h2>
            <div>
                <label htmlFor="km">Km: </label>
                <input disabled={Inverted2} id="km" onChange={ChangeInput2} value={Inverted2 ? Amount2/0.621371: Amount2} type='number' placeholder="Km"></input>
                <p></p>
                <label htmlFor="miles">Miles: </label>
                <input disabled={!Inverted2} id="miles" onChange={ChangeInput2} value={Inverted2 ? Amount2 : Amount2*0.621371} type='number' placeholder="Miles"></input>
                <p></p>
                <button onClick={()=>{setAmount2(0)}}>reset</button>
                <button onClick={ChangeInverted2}>{Inverted2 ? 'turn back' : 'invert'}</button>
            </div>
        </div>
    )
}

export default ConverterMiles;