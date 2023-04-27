import React from 'react';
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      // Operador Ternario: si esbotondeclic asignar clase boton de clic y si no es, es boton de reiniciar y asignar clase boton-reiniciar//
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;
 