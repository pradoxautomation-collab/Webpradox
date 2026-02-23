import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiTrendingUp, FiCpu } from 'react-icons/fi';
import './Home.css';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Pradox Automation | Automação de Marketing e Web Scraping</title>
                <meta name="description" content="A Pradox Automation oferece as melhores soluções em Automação de Marketing, Criação de Agentes de IA e Web Scraping para impulsionar e escalar seu negócio." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero-section text-center">
                <div className="container hero-content animate-fade-in">
                    <h1 className="hero-title">
                        Escale seu negócio com <br />
                        <span className="text-gradient">Automação Inteligente</span>
                    </h1>
                    <p className="hero-subtitle">
                        Desenvolvemos agentes de IA, fluxos de marketing digital e estratégias de Web Scraping para colocar sua empresa no controle do mercado.
                    </p>
                    <div className="hero-actions">
                        <Link to="/services" className="btn btn-primary">
                            Conheça Nossos Serviços <FiArrowRight />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Falar com Especialista
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="section services-overview">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Nossas Especialidades</h2>
                        <p className="text-muted">A tecnologia que sua empresa precisa, aplicada das melhores formas.</p>
                    </div>

                    <div className="services-grid">
                        <div className="glass-card text-center">
                            <div className="icon-wrapper">
                                <FiTrendingUp size={40} className="icon-accent-blue" />
                            </div>
                            <h3>Automação de Marketing</h3>
                            <p className="text-muted">Transforme leads em clientes com fluxos de e-mail e campanhas totalmente automatizadas.</p>
                        </div>

                        <div className="glass-card text-center">
                            <div className="icon-wrapper">
                                <FiCode size={40} className="icon-accent-purple" />
                            </div>
                            <h3>Web Scraping</h3>
                            <p className="text-muted">Coleta e monitoramento de dados em massa para decisões estratégicas mais rápidas.</p>
                        </div>

                        <div className="glass-card text-center">
                            <div className="icon-wrapper">
                                <FiCpu size={40} className="icon-accent-blue" />
                            </div>
                            <h3>Agentes de IA</h3>
                            <p className="text-muted">Implementação de IAs que atendem, analisam e operam seu negócio 24/7.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <h2>Pronto para liderar o mercado?</h2>
                    <p className="text-muted" style={{ marginBottom: '2rem' }}>Deixe a operação manual no passado e abrace a inovação contínua.</p>
                    <Link to="/contact" className="btn btn-primary btn-large">
                        Solicite um Orçamento
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
