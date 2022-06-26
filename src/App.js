import './App.css';
import NavigationBar from './components/NavigationBar';
import Beranda from './components/Beranda';

function App() {
  return (
    <div className="App">
      <div>
      <NavigationBar fixed="top" />
      <Beranda/>
      </div>
    </div>
  );
}

export default App;
