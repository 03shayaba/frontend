import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { Header } from "./Components/Header";
import Home from './Components/Home';
import CounterClass from './Components/CounterClass';
import Welcome from './Components/Welcome';
import Props from './Components/Props';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<><Home />  <Welcome /></>}/>
        <Route  path='/header' element = {<Header />}/>
        <Route path='/counter'  element={<CounterClass />}/>
        <Route path='/props'   element={<Props name="Shayaba" />  }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
