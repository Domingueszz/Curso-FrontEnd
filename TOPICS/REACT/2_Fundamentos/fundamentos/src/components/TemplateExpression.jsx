import React from "react";

const TemplateExpression = () => {
    const name = "Pablo";
    const data = {
        age: 19,
        job: "Programador"
    }
    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>Bem vindo {name}</h3>
            <p>Idade: {data.age}</p>
            <p>Profissão: {data.job}</p>
        </div>
    )
}

export default TemplateExpression