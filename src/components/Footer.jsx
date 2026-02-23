import { Link } from 'react-router-dom';
import { FiMail, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link to="/" className="navbar-logo">
                        <span className="logo-text text-gradient">PRADOX</span>
                        <span className="logo-sub">AUTOMATION</span>
                    </Link>
                    <p className="footer-desc">
                        Transformando o seu negócio com Automação de Marketing digital e Web Scraping inteligente.
                        Melhores ferramentas. Melhores práticas de SEO.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Navegação</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Serviços</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Redes Sociais</h4>
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noopener noreferrer"><FiInstagram size={24} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FiLinkedin size={24} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FiGithub size={24} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FiMail size={24} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Pradox Automation. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
