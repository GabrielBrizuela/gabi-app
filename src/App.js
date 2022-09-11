
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <div className='container-fluid fondo_oscuro'>
    <NavBar/>
    
    <hr/>
    <ItemListContainer/>
    <ItemCount stock={5} initial={1} onAdd={0}/>
    <ItemDetailContainer/>
    
    <Footer/>
    </div>
  );
}

export default App;
