import { useState } from "react";

function Today220714(){
    const [Like, setLike] = useState(0);
    const increment = ()=>{setLike (Like + 1)}
    const decrement = ()=>{
        if (Like <= 0 ){
            return setLike(0)
        } else{
            return setLike (Like - 1)
        }
    }

    return(
        <main style={{textAlign : 'center'}}>
            <h1>좋아요: {Like}</h1>
            <div style={{cursor: 'pointer', display:'flex', justifyContent: 'center'}}>
                <h3 onClick={increment}>👍</h3><h3 onClick={decrement}>👎</h3>
            </div>
        </main>
    )
}

export default Today220714;