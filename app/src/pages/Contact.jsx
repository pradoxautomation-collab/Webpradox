import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiMail, FiMapPin, FiPhone, FiMessageCircle, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const whatsappNumber = "551152863041";
    const whatsappMessage = "Olá! Gostaria de saber mais sobre as soluções de Automação e IA.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // NOTA: Para funcionar, você pode usar um serviço como Formspree.io ou um Webhook do N8N.
            // Vou configurar para enviar os dados para o endpoint.
            const response = await fetch('https://n8n.pradoxautomation.com/form/ca513e09-f0e9-484f-9516-6b4454def801', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', company: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Erro ao enviar:', error);
            setStatus('error');
        }
    };

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
                                            <p className="text-muted">pradoxautomation@gmail.com</p>
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
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginTop: '1rem' }}>
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <a href="https://www.instagram.com/pradoxautomacao/" target="_blank" rel="noopener noreferrer" className="social-icon-link"><FiInstagram size={20} /></a>
                                            <a href="https://www.linkedin.com/in/pradox-automation-undefined-08bb073a7/" target="_blank" rel="noopener noreferrer" className="social-icon-link"><FiLinkedin size={20} /></a>
                                            <a href="https://github.com/pradoxautomation-collab" target="_blank" rel="noopener noreferrer" className="social-icon-link"><FiGithub size={20} /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div style={{ flex: '1.5 1 400px' }} className="glass-card">
                            <h2 style={{ marginBottom: '2rem' }}>Envie uma Mensagem</h2>

                            {status === 'success' ? (
                                <div className="animate-fade-in" style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <FiCheckCircle size={60} color="#00ff88" style={{ marginBottom: '1rem' }} />
                                    <h3 style={{ color: '#00ff88' }}>Mensagem Enviada!</h3>
                                    <p className="text-muted">Agradecemos o contato. Nossa equipe retornará em breve no seu e-mail.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="btn btn-primary"
                                        style={{ marginTop: '2rem' }}
                                    >
                                        Enviar outra mensagem
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div className="form-group">
                                            <label className="form-label">Nome Completo</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-input"
                                                placeholder="Ex: João Silva"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Empresa</label>
                                            <input
                                                type="text"
                                                name="company"
                                                className="form-input"
                                                placeholder="Ex: Acme Corp"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">E-mail Profissional</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            placeholder="joao@empresa.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Como podemos ajudar?</label>
                                        <textarea
                                            name="message"
                                            className="form-textarea"
                                            placeholder="Descreva brevemente o seu desafio operacional..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <p style={{ color: '#ff4d4d', fontSize: '0.9rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <FiAlertCircle /> Ocorreu um erro ao enviar. Tente novamente ou use o WhatsApp.
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ width: '100%', marginTop: '1rem', opacity: status === 'loading' ? 0.7 : 1 }}
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? (
                                            <>Enviando... <FiLoader className="animate-spin" /></>
                                        ) : (
                                            <>Enviar Mensagem <FiSend /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
