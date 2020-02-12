import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import Title from './Components/Title.js';
import logoPlaces from './images/logo-places.png'
import star from './images/star.png';
import noWifi from './images/no-wifi.png';
import heart from './images/heart.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { indigo400, redA400, lightBlueA400, amberA400 } from 'material-ui/styles/colors';
import { Card, CardText} from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { CardContent, CardActionArea } from '@material-ui/core';

  export default () => {
    const [numero, setNumero] = useState(0);
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div style={{"width":"80%", "margin":"0 auto"}}>
            <div className="Header-main">
              <Title></Title>
              <h2>{numero}</h2>
              <RaisedButton onClick={()=>setNumero(numero + 1)} label="Crear cuenta gratuita" secondary={true}/>
              <img className="Header-illustration" src={logoPlaces} alt="logo-places" height="300"/>
            </div>
          </div>
        </div>
        <div style={{'backgroundColor':indigo400, 'padding':'50px'}}>
        
          <ul>
            <Grid container spacing={3}>

              <Grid item xs={4}>
                <Card className="Header-benefit">
                  <CardActionArea>
                    <CardMedia style={{'background':redA400}} alt="" height="140" component="img" image={heart} title=""/>
                    <CardContent>
                      <h3>Califica con emociones</h3>
                      <p>Califica tus lugares con experiencias, no con números</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card className="Header-benefit">
                  <CardActionArea>
                    <CardMedia style={{'background':lightBlueA400}} alt="" height="140" component="img" image={noWifi} title=""/>
                    <CardContent>
                      <h3>Sin internet ? sin problemas</h3>
                      <p>Places funciona sin internet o en conexiones lentas</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card className="Header-benefit">
                  <CardActionArea>
                    <CardMedia style={{'background':amberA400}} alt="" height="140" component="img" image={star} title=""/>
                    <CardContent>
                      <h3>Tus lugares favoritos</h3>
                      <p>Define tu lista de sitios favoritos</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

          </Grid>
          </ul>
        </div>
      </MuiThemeProvider>
    );
}
