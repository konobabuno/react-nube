import './App.css';

function MyButton(){
  function handleClick(){
    alert("HOLA:)");
  }

  return(
    <button onClick={handleClick}>
      Soy un boton:os
    </button>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HOLA_:)</h1>
      </header>
    </div>
  );
}

export default App;
