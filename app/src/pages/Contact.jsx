import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiMail, FiMapPin, FiPhone, FiMessageCircle, FiSend, FiCheckCircle, FiAlertCircle, FiLoader, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

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
            const response = await fetch('https://n8n.pradoxautomation.com/webhook/formulario', {
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
                <meta name="description" content="Fale conosco para transformar seu negócio com automação inteligente, IA e web scraping." />
            </Helmet>

            <section className="section animate-fade-in" style={{ paddingTop: '150px', minHeight: '100vh' }}>
                <div className="container">
                    <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Fale Conosco</h1>
                        <p className="hero-subtitle">Mapeamos seus processos e encontramos as melhores oportunidades de automação para o seu time.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        {/* Information Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass-card">
                                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <FiMessageCircle className="icon-accent-blue" /> Canais Diretos
                                </h3>
                                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                    Inicie um diálogo imediato com nossa equipe para acelerar a sua transformação digital.
                                </p>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                                    <FiMessageCircle size={20} /> WhatsApp Business
                                </a>
                            </div>

                            <div className="glass-card">
                                <h3 style={{ marginBottom: '2rem' }}>Informações de Contato</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <div style={{ padding: '12px', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '12px' }}><FiMail className="icon-accent-blue" size={24} /></div>
                                        <div>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>E-mail</p>
                                            <p style={{ fontWeight: '600' }}>pradoxautomation@gmail.com</p>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <div style={{ padding: '12px', background: 'rgba(157, 0, 255, 0.1)', borderRadius: '12px' }}><FiPhone className="icon-accent-purple" size={24} /></div>
                                        <div>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Telefone</p>
                                            <p style={{ fontWeight: '600' }}>+55 (11) 5286-3041</p>
                                        </div>
                                    </li>
                                </ul>

                                <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', gap: '1.5rem' }}>
                                    <a href="https://www.instagram.com/pradoxautomacao/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: '0.3s' }}>
                                        <FiInstagram size={24} onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/pradox-automation-undefined-08bb073a7/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: '0.3s' }}>
                                        <FiLinkedin size={24} onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'} />
                                    </a>
                                    <a href="https://github.com/pradoxautomation-collab" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: '0.3s' }}>
                                        <FiGithub size={24} onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="glass-card">
                            <h2 style={{ marginBottom: '2rem' }}>Enviar Proposta</h2>

                            {status === 'success' ? (
                                <div className="animate-fade-in" style={{ textAlign: 'center', padding: '3rem 0' }}>
                                    <FiCheckCircle size={80} color="#00ff88" style={{ marginBottom: '1.5rem' }} />
                                    <h2 style={{ color: '#00ff88', marginBottom: '1rem' }}>Sucesso!</h2>
                                    <p className="text-muted">Sua mensagem foi entregue diretamente ao nosso time técnico. Retornaremos em breve.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="btn btn-outline"
                                        style={{ marginTop: '2.5rem' }}
                                    >
                                        Novo Envio
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label">Nome</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-input"
                                            placeholder="Seu nome"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">E-mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            placeholder="seu@email.com"
                                            value={formData.email}
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
                                            placeholder="Nome da sua empresa"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Mensagem</label>
                                        <textarea
                                            name="message"
                                            className="form-textarea"
                                            placeholder="Como podemos ajudar a automatizar seu negócio?"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <p style={{ color: '#ff4d4d', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <FiAlertCircle /> Erro ao enviar. Tente novamente ou use o WhatsApp.
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ width: '100%', marginTop: '1rem' }}
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? (
                                            <>Processando... <FiLoader className="animate-spin" /></>
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
