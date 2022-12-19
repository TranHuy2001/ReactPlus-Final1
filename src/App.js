import layouts from './components/layouts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Routes path="/" element={<layouts/>}/>
      </Routes>
    </div>
  );
}

export default App;
