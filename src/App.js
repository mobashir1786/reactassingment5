import './App.css';
import PureComponent from './component/PureComponent';
import HigherOrderComponent from './component/HigherOrderComponent';

function App() {
  return (
    <div className="App">
    <HigherOrderComponent/>
    <br /> <br />
    <PureComponent/>
    </div>
  );
}

export default App;
