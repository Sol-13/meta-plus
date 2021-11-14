import React from 'react';



const Card = props => {

return (
 
  <div className="main">
    <div className="card">
   <img src= {props.imagen} alt=""></img>
   <div className="datos">
      <p className="nombre">{props.nombre}</p>
      
    </div>
    </div>
   
  </div>

);
};

export default Card;