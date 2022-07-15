import { useState, useEffect } from "react";

function Today220714_1(){
    const [update, setUpdate] = useState(0);

    const [Name, setName] = useState('');

    const handleCountBtn = ()=>{
        // console.log('눌렀냐?')

        return (
            setUpdate(update + 1)
        )
    }
    /* name을 setName 할 때 마다 계속해서 재 렌더링이 되는 것, 그래서 화면에서도 바로 적용되고,
    콘솔에서도 계속해서 렌더링 된다는 표시(계속해서 글자 갱신)가 뜨는 거여! */
    const handleInputName = (e)=>{
        // console.log(e.target.value)
        return (
            setName(e.target.value)
        )
    }

    /* 랜더링 될 때마다 매번 실행됨 (즉, 버튼이 구현되었다면(state가 업데이트가 된다면) 누를 때마다 실행이된다는 뜻)
    [] 배열(dependency array) 안에 넣어준 것만 렌더링된다!! update btn & 화면 시작할 때만 렌더링(mount) */
    useEffect(()=>{
        console.log('랜더링 되냐?')
    }, [update])

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