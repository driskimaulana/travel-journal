import './Assets/style/App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Data from './data'

function App() {
  
  const data = Data.map(x => {
    return (<Card key="" data={x} />)
  })

  return (
    <div className="App">
      <Navbar />
      {data}
    </div>
  );
}

export default App;
