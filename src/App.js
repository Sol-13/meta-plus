import React from 'react';
import './styles/App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';

import Users from './assets/usuarios.jfif'
import Shop from './assets/shop.jpg'
import Series from './assets/series.jfif'
import Cinema from './assets/cinema.jfif'


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


<footer class="foo">


</footer>
  </div>



  );

}

export default App;