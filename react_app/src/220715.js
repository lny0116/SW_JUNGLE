import { useState, useEffect } from "react";
import Timer from './component/Timer'

function Today220715(){
    const [ShowTimer, setShowTimer] = useState(false);

    return(
        <main style={{marginTop:'100px', textAlign: 'center', justifyContent: 'center'}}>
            {ShowTimer && <Timer />} {/* showtimer가 true일때만 실행 */}
            <p></p>
            <button onClick={()=> setShowTimer(!ShowTimer)}>Toggle Timer</button>
        </main>
    )
}

export default Today220715;