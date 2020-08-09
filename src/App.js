import React from 'react';
import logo from './logo.svg';
import './App.css';

//
import MiComponente from './components/MiComponent';

// Ejecución de funciones mediante la interpolación {}
function Bye(name) {
  return <h1>Adios {name}</h1>
}

// Componente funcional, paso de propiedades a través de props
function Welcome(props) {
  return <h1>Bienvenido {props.name}</h1>
}

function Body(props) {
  return (
    <React.Fragment>
      <h2>{props.nombre}</h2>
      <h2>{props.apellido}</h2>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Welcome name="Tolentino"/>
        <section className="componentes">
          <MiComponente name="George" disabled="true" cual="100"/>
        </section>
      </header>
      <Body nombre="Alberto" apellido="Garcia"/>
      {Bye('garcia')}
    </div>
  );
}

export default App;
