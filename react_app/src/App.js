import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function Header(props){
  return <header>
  <h1><a href='/' onClick={(event)=>{ // === function(event){}
    event.preventDefault(); // 처음에 그냥 눌리면 클릭 이벤트 발생하지 않게 
    props.onChangeMode(); // 누르면 alert 띄우는 이벤트 발생 시키는 함수
  }
  }>{props.title}</a></h1>
</header>
}

function Nav(props){
  const lis = []
  for (let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={"/read/" + t.id} onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
      //내부의 onChangeMode를 호출하는 것이니까 props를 이용해 호출하는 것
      //event.target이라는 것은 이벤트를 발생시킨 타겟을 말하는 건데, 이는 <a>태그를 말하는 것임
    }}>{t.title}</a></li>)
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function App() {
  const [mode, setMode] = useState('Welcome');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is ...!'},
    {id:2, title:'css', body:'css is ...!'},
    {id:3, title:'JS', body:'JS is ...!'},
  ]
  let content = null;
  if (mode === 'Welcome'){
    content = <Article title="Welcome" body="hi, react~ my name is lena!"></Article>
  } else if (mode === 'Read'){
    let title, body = null;
    for (let i = 0; i<topics.length; i++){
      // console.log(topics[i].id, id);
      if (topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="Web" onChangeMode={()=>{ // === function(){}
        setMode('Welcome');
      }}>
      </Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode('Read');
        setId(id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;