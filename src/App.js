import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { Header } from "./Components/Header";
import Home from './Components/Home';
import CounterClass from './Components/CounterClass';
import Welcome from './Components/Welcome';
import Props from './Components/Props';
import TypingName from './Components/Typeing';
import Parent from './Components/Parent';
import Button from'./Components/Button';
import {useState} from 'react';
import Card from './Components/Card';
// import Pannel from './Components/Pannel';

import Hello from './Components/Hello';

function App() {
  const [Count , setCount] = useState(0);
  const [name , setName] = useState("");
  function handleClick(){
    setCount(Count+1);
  }
  return (
    <div className="App">
      <BrowserRouter>
    
          <Routes>
        <Route path='/' element = {<><Home /> <Parent />  <Welcome />  <TypingName /></>}/>
        <Route  path='/header' element = {<Header />}/>
        <Route path='/counter'  element={<CounterClass />}/>
        <Route path='/props'   element={<Props name="Shayaba" />  }/>
        {/* <Route path='/parent'   element={<Parent />  }/> */}

        {/* props.children route passing to the button component */}
        <Route  path='/button' element ={<Button  
        HandleClick={handleClick} text="click Me">
          <h1>{Count}</h1>
        </Button> }/>
        </Routes>
        {/* state */}
        <Card name={name} setName={setName} />
        <p>I am inside parent :{name}</p>

        {/* panel */}
        {/* <Pannel title="About">
          With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        </Pannel>
        <Pannel title="Etymology">
           The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
        </Pannel> */}

        <Hello />
      </BrowserRouter>
    </div>
  );
}

export default App;
