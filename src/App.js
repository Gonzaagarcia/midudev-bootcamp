import './App.css';

const App = () => {
  const a = 2
  const b = 3

  return (
    <div className='App'>
      <h1>Titulo de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es:</p>
        {a + b}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      Hola Mundo
    </div>
  );
}

export default App;
