import React from 'react';
import './styles/App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';

import Users from './assets/usuarios.jfif';
import Shop from './assets/shop.jpg';
import Series from './assets/series.jfif';
import Cinema from './assets/cinema.jfif';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitch, faTwitter} from '@fortawesome/free-brands-svg-icons';

/*RESOLVER ESTO*/
/*import Maps from './components/Maps';
import Maps from 'simple-react-google-maps'
*/


const App = () => {
  return (
 /*Revisar estos divs*/
   <div> <div className="">
   
    <NavBar/>
  
    </div>

  <div><h1>METAPLUS</h1></div>

  <div className="container">
    
    <div className="main">
      
    <Card nombre="Users"  imagen={Users}/>
    <Card nombre="Shop"  imagen={Shop}/>
    <Card nombre="Series" imagen={Series}/>
    <Card nombre="Cinema"   imagen={Cinema}/>
  
    </div>
  
  </div>

<div> <h4>*COMUNIDAD, MERCHANDISING, SERIES Y PELICULAS EN UN SOLO LUGAR*</h4></div>


<footer className="foo">
<div>
    <FontAwesomeIcon className="separar"  icon={faFacebook} />
    <FontAwesomeIcon className="separar"  icon={faInstagram} />
    <FontAwesomeIcon className="separar"  icon={faTwitter} />
    <FontAwesomeIcon className="separar"  icon={faTwitch} />
</div>

<h6>Copyright © 2021 Sol Alvar.</h6>

{/*
<Maps/>
*/}
</footer>

</div>

);

}

export default App;