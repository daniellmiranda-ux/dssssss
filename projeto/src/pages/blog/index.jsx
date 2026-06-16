import "./style.css";

export default function Blog() {
    const posts = [
        { titulo: "A importância do Check-up anual", categoria: "Saúde Preventiva" },
        { titulo: "Alimentação saudável para o coração", categoria: "Nutrição" },
        { titulo: "Como manter a rotina de exames em dia", categoria: "Dicas Práticas" }
    ];

    return (
        <div className="blog-container">
            <h1>Blog da Saúde</h1>

            {posts.map((post, index) => (
                <div key={index} className="card-post">
                    <h2>{post.titulo}</h2>
                    <p>{post.categoria}</p>
                </div>
            ))}
        </div>
    );
}