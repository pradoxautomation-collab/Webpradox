import { Helmet } from 'react-helmet-async';
import { FiMail, FiMapPin, FiPhone, FiMessageCircle, FiSend } from 'react-icons/fi';

const Contact = () => {
    const whatsappNumber = "551152863041"; // Substituir com o número real
    const whatsappMessage = "Olá! Gostaria de saber mais sobre as soluções de Automação e IA.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <>
            <Helmet>
                <title>Contato | Pradox Automation</title>
                <meta name="description" content="Entre em contato com a Pradox Automation. Transforme seu negócio hoje mesmo com nossas soluções em automação, IA e web scraping." />
            </Helmet>

            <section className="section animate-fade-in" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Fale com um Especialista</h1>
                        <p className="hero-subtitle">Mapeamos seus processos e encontramos as melhores oportunidades de automação para o seu time.</p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginTop: '3rem' }}>
                        {/* Contact Info */}
                        <div style={{ flex: '1 1 300px' }}>
                            <div className="glass-card" style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FiMessageCircle className="icon-accent-blue" /> Atendimento Direto
                                </h3>
                                <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                                    A forma mais rápida de iniciar o seu projeto é enviando uma mensagem para nossa equipe técnica via WhatsApp.
                                </p>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                                    <FiMessageCircle size={20} /> Iniciar Conversa no WhatsApp
                                </a>
                            </div>

                            <div className="glass-card">
                                <h3 style={{ marginBottom: '1.5rem' }}>Informações Corporativas</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}><FiMail className="icon-accent-purple" size={20} /></div>
                                        <div>
                                            <p style={{ fontWeight: 'bold' }}>E-mail</p>
                                            <p className="text-muted">contato@pradoxautomation.com</p>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}><FiPhone className="icon-accent-blue" size={20} /></div>
                                        <div>
                                            <p style={{ fontWeight: 'bold' }}>Telefone / WhatsApp</p>
                                            <p className="text-muted">+55 (11) 5286-3041</p>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}><FiMapPin className="icon-accent-purple" size={20} /></div>
                                        <div>
                                            <p style={{ fontWeight: 'bold' }}>Sede</p>
                                            <p className="text-muted">São Paulo - SP, Brasil<br />(Atendimento Global)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div style={{ flex: '1.5 1 400px' }} className="glass-card">
                            <h2 style={{ marginBottom: '2rem' }}>Envie uma Mensagem</h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className="form-group">
                                        <label className="form-label">Nome Completo</label>
                                        <input type="text" className="form-input" placeholder="Ex: João Silva" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Empresa</label>
                                        <input type="text" className="form-input" placeholder="Ex: Acme Corp" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">E-mail Profissional</label>
                                    <input type="email" className="form-input" placeholder="joao@empresa.com" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Como podemos ajudar?</label>
                                    <textarea className="form-textarea" placeholder="Descreva brevemente o seu desafio operacional, processos manuais ou qual tipo de automação procura..." required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                    Enviar Mensagem <FiSend />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
