import React from 'react'

function Event() {
    const handleClick = (e) => {
        console.log(e);
        console.log("Executado");
    };

// Renderização
const renderSomething = (x) => {
    if(x) {
        return <h1>Renderizado</h1>;
    } else {
        return <h1>Renderizando...</h1>;
    }
};

  return (
    <div>
      <div>
        <button onClick={() => console.log ("Testando")}>Clique aqui</button>
      </div>

        {/* Evento c/ Função */}

      <div>
        <button onClick={handleClick}>Função</button>
      </div>

        {/*Função c/ Render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Event
