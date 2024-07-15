import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Polygontime from './component/Polygontime';
import Cardswiper from './component/Cards/Cardswiper';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Polygontime></Polygontime>
      <Cardswiper></Cardswiper>
    </>
  );
}


export default App;
