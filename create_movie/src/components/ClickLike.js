import { useState } from "react";

function ClickLike(){
    const [HereClick, setHereClick] = useState(0);
    const HereClickChange = ()=>{
        return setHereClick(HereClick + 1)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p>{HereClick}</p>
            <button style={{all:'unset', cursor:'pointer'}} onClick={HereClickChange}>👍</button>
        </div>
    )
}

export default ClickLike;