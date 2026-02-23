import { Helmet } from 'react-helmet-async';
import { FiTrendingUp, FiCode, FiCpu, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Serviços | Pradox Automation</title>
                <meta name="description" content="Nossos serviços incluem automação de marketing digital, robôs de web scraping e inteligência artificial para otimização de negócios." />
            </Helmet>

            <section className="section animate-fade-in" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h1 className="text-gradient">Nossos Serviços</h1>
                        <p className="hero-subtitle">Engenharia de automação avançada para empresas que buscam eficiência extrema.</p>
                    </div>

                    <div className="services-grid" style={{ gridTemplateColumns: '1fr', gap: '4rem' }}>
                        {/* Service 1 */}
                        <div className="glass-card" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 300px' }}>
                                <FiTrendingUp size={60} className="icon-accent-blue" style={{ marginBottom: '1.5rem' }} />
                                <h2>Automação de Marketing</h2>
                                <p className="text-muted" style={{ margin: '1rem 0 2rem' }}>
                                    Criamos funis inteligentes, integramos CRM e plataformas (como N8N, Make, Zapier) para garantir que seus leads sejam nutridos e convertidos automaticamente.
                                </p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle className="icon-accent-blue" /> Fluxos de Email Automatizados</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle className="icon-accent-blue" /> Qualificação de Leads Automática</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle className="icon-accent-blue" /> Recuperação de Vendas e Carrinhos</li>
                                </ul>
                            </div>
                            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ padding: '2rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                                    <p className="text-muted">"A automação reduziu nosso custo de aquisição (CAC) em 45% e aumentou a conversão em 2x."</p>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="glass-card" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap-reverse', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ padding: '2rem', background: 'rgba(157, 0, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(157, 0, 255, 0.2)' }}>
                                    <p className="text-muted">"Monitoramos os preços dos concorrentes diariamente e ajustamos as margens sem esforço humano."</p>
                                </div>
                            </div>
                            <div style={{ flex: '1 1 300px' }}>
                                <FiCode size={60} className="icon-accent-purple" style={{ marginBottom: '1.5rem' }} />
                                <h2>Web Scraping e Extração de Dados</h2>
                                <p className="text-muted" style={{ margin: '1rem 0 2rem' }}>
                                    A informação que você precisa, estruturada. Extraímos dados da web em larga escala para análise de concorrência, geração de leads e pesquisa de mercado.
                                </p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle className="icon-accent-purple" /> Monitoramento de Preços dinâmico</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle className="icon-accent-purple" /> Geração de Leads B2B via API e Scrapers</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle className="icon-accent-purple" /> APIs personalizadas para ferramentas legadas</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="glass-card" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 300px' }}>
                                <FiCpu size={60} className="icon-accent-blue" style={{ marginBottom: '1.5rem' }} />
                                <h2>Agentes de Inteligência Artificial</h2>
                                <p className="text-muted" style={{ margin: '1rem 0 2rem' }}>
                                    Desenvolvemos chatbots inteligentes e agentes que operam como funcionários virtuais, capazes de raciocinar com base na sua documentação e sistemas.
                                </p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle className="icon-accent-blue" /> Atendimento via WhatsApp humanizado</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle className="icon-accent-blue" /> Agentes de vendas que agendam reuniões</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle className="icon-accent-blue" /> Integração com LLMs avançados (OpenAI, Anthropic)</li>
                                </ul>
                            </div>
                            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ padding: '2rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                                    <p className="text-muted">"Nosso bot resolve 80% das dúvidas dos clientes em tempo real, 24 horas por dia."</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="text-center" style={{ marginTop: '5rem' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Precisa de uma solução sob medida?</h3>
                        <Link to="/contact" className="btn btn-primary btn-large">
                            Fale com um Especialista Agora
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
