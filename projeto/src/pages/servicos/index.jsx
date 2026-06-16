import "./style.css";

export default function Servicos() {
    const tratamentos = [
        { titulo: "Consultas Médicas", descricao: "Geral e Especialidades" },
        { titulo: "Exames Laboratoriais", descricao: "Análises Clínicas Completas" },
        { titulo: "Atendimento Preventivo", descricao: "Programas de Check-up" }
    ];

    return (
        <div className="servicos-container">
            <h1>Nossos Serviços</h1>

            {tratamentos.map((servico, index) => (
                <div key={index} className="card-servico">
                    <h2>{servico.titulo}</h2>
                    <p>{servico.descricao}</p>
                </div>
            ))}
        </div>
    );
}