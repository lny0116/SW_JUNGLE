import {useEffect, useState} from 'react'

function Timer(){
    // 추가로 timer를 만들어봄... ㅋ
    const [Min, setMin] = useState(2);
    const [Sec, setSec] = useState(0);

    useEffect(()=>{
        const countdown = setInterval(()=>{
            if(parseInt(Sec) > 0){
                setSec(parseInt(Sec) - 1)
            }
            if (parseInt(Sec) === 0){
                if (parseInt(Min) === 0){
                    clearInterval(countdown)
                }else{
                    setMin(parseInt(Min) - 1)
                    setSec(59)
                }
            }
        },1000)
        return ()=> clearInterval(countdown)
    },[Min,Sec])

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log(`timer ing...`)
        },1000)
        return ()=>{
            clearInterval(timer)
            //정리하는 함수(이 작업을 안 하면, 타이머가 계속해서 종료되지 않고 돌아감)
            console.log('timer is end~~')
        }
    },[]) //timer가 처음 화면에 렌더링 되었을 때만 실행되게끔

    return(
        <div style={{textAlign: 'center'}}>
            <span>Now, Timer is start. See the console!</span>
            <p>{Min}:{Sec< 10 ? `0${Sec}`:Sec}</p>
        </div>
    )
}

export default Timer;