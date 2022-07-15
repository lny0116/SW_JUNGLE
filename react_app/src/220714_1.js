import { useState, useEffect } from "react";

function Today220714_1(){
    const [update, setUpdate] = useState(0);

    const [Name, setName] = useState('');

    const handleCountBtn = ()=>{
        console.log('눌렀냐?')

        return (
            setUpdate(update + 1)
        )
    }

    const handleInputName = (e)=>{
        return (
            setName(e.target.value)
        )
    }

    //랜더링 될 때마다 매번 실행됨 (즉, 버튼이 구현되었다면(state가 업데이트가 된다면) 누를 때마다 실행이된다는 뜻)
    useEffect(()=>{
        console.log('랜더링 되냐?')
    })

    return(
        <main style={{textAlign: 'center'}}>
            <h1>update btn: {update}</h1>
            <button onClick={handleCountBtn}>이거 눌러</button>
            <p>
            <input type='text' value={Name} onChange={handleInputName}></input>
            </p>
            <p>name: {Name}</p>
        </main>
    )
}

export default Today220714_1;