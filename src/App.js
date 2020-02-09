import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title.js';

function App() {
  return (
    <section>
      <div>
        <div>
          <Title></Title>
          <button>Crear una cuenta gratuita</button>
          <div>
            <ul>
              <li>
                <h3>Califica con emociones</h3>
                <p>Califica tus lugares con experiencias, no con números</p>
              </li>
              <li>
                <h3>Sin internet ? sin problemas</h3>
                <p>Places funciona sin internet o en conexiones lentas</p>
              </li>
              <li>
                <h3>Tus lugares favoritos</h3>
                <p>Define tu lista de sitios favoritos</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
