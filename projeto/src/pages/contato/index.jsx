import "./style.css";

export default function Contato() {
    const canais = [
        { meio: "Telefone Fixo", informacao: "(71) 3311-1900." },
        { meio: "WhatsApp Consultas", informacao: "(71) 3311-1954" },
        { meio: "E-mail de Atendimento", informacao: "contato@hospclima.com.br" }
    ];

    return (
        <div className="contato-container">
            <h1>Fale Conosco</h1>

            {canais.map((canal, index) => (
                <div key={index} className="card-contato">
                    <h2>{canal.meio}</h2>
                    <p>{canal.informacao}</p>
                </div>
            ))}
        </div>
    );
}