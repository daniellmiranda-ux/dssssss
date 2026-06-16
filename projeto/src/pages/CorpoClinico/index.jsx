import "./style.css";

function CorpoClinico() {
    const doutores = [
        { nome: "Dr. Edvaldo Barros", especialidade: "Clinico Geral" },
        { nome: "Dra. Alday Celia", especialidade: "Ginecologista" },
        { nome: "Dr. Fabiana Palma", especialidade: "Dermatologista" }
    ];

    return (
        <div className="artilheiros-container">
            <h1>Nosso Corpo Clínico</h1>

            {doutores.map((medico, index) => (
                <div key={index} className="card-artilheiro">
                    <h2>{medico.nome}</h2>
                    <p>{medico.especialidade}</p>
                </div>
            ))}
        </div>
    );
}

export default CorpoClinico;