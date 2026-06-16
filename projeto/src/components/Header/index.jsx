import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../assets/IMG_5424.jpeg';
import './style.css';

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <img src={logoImg} alt="Logo Clínica" style={{ width: '45px', height: '45px', borderRadius: '50px', objectFit: 'cover' }} />
                    <h1>Clínica Maria Albano</h1>
                </Link>
            </div>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/servicos">Serviços</NavLink>
                <NavLink to="/corpo-clinico">Corpo Clínico</NavLink>
                <NavLink to="/quem-somos">Quem Somos</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contato">Contato</NavLink>
            </nav>
        </header>
    );
}