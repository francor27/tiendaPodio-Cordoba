import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import itemListContainer from './componentes/itemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
        <NavBar />
        <itemListContainer greeting="Bienvenidos" />
    </div>
  );
}

export default App;
