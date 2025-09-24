import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { Header } from "./Components/Header";
import Home from './Components/Home';
import CounterClass from './Components/CounterClass';
import Welcome from './Components/Welcome';
import Props from './Components/Props';
import TypingName from './Components/Typeing';
import Parent from './Components/Parent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
          <Routes>
        <Route path='/' element = {<><Home /> <Parent />  <Welcome />  <TypingName /></>}/>
        <Route  path='/header' element = {<Header />}/>
        <Route path='/counter'  element={<CounterClass />}/>
        <Route path='/props'   element={<Props name="Shayaba" />  }/>
        {/* <Route path='/parent'   element={<Parent />  }/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
