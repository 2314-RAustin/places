import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import Title from './Components/Title.js';
import logoPlaces from './images/logo-places.png'

  export default () => {
    const [numero, setNumero] = useState(0);
    return (
      <section>
        <div className="Header-background">
          <div style={{"width":"80%", "margin":"0 auto"}}>
            <div className="Header-main">
              <Title></Title>
              <h2>{numero}</h2>
              <button onClick={()=>setNumero(numero + 1)}>Crear una cuenta gratuita</button>
              <img className="Header-illustration" src={logoPlaces} alt="logo-places" height="300"/>
            </div>
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
