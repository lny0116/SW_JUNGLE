import { useState } from "react";

function ClickLike(){
    const [HereClick, setHereClick] = useState(0);
    const HereClickChange = ()=>{
        // return setHereClick(HereClick + 1)
        setHereClick ((current)=>current + 1)
        // 현재 state를 기반으로 계산을 하고 싶으면 current를 사용하자! 이게 더 안전함
        // state의 값이 현재 값을 바탕으로 나오게끔
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p>{HereClick}</p>
            <button style={{all:'unset', cursor:'pointer'}} onClick={HereClickChange}>👍</button>
        </div>
    )
}

export default ClickLike;