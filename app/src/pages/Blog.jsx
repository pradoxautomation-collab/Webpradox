import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Como Agentes Baseados em LLMs estão revolucionando o Atendimento ao Cliente",
            excerpt: "Descubra como empresas estão reduzindo a fricção e escalando suporte 24/7 com inteligências artificiais com raciocínio adaptativo...",
            category: "Inteligência Artificial",
            date: "23 Fev 2026",
            readTime: "5 min",
            image: "linear-gradient(135deg, rgba(0, 240, 255, 0.4), rgba(157, 0, 255, 0.4))"
        },
        {
            id: 2,
            title: "N8N vs Zapier: Qual a melhor escolha para sua infraestrutura?",
            excerpt: "Um comparativo técnico focado em limites de uso, custo-benefício para automações de alto volume e capacidade técnica de integração de APIs customizadas...",
            category: "Automação",
            date: "14 Fev 2026",
            readTime: "8 min",
            image: "linear-gradient(135deg, rgba(157, 0, 255, 0.4), rgba(0, 240, 255, 0.4))"
        },
        {
            id: 3,
            title: "Técnicas Indetectáveis de Web Scraping em Plataformas Modernas",
            excerpt: "Entenda a arquitetura de proxies residenciais, headless browsers com Stealth plugins e como mapear APIs fechadas via requisições...",
            category: "Web Scraping",
            date: "05 Fev 2026",
            readTime: "12 min",
            image: "radial-gradient(circle at top right, rgba(0, 240, 255, 0.5), transparent)"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Blog | Pradox Automation</title>
                <meta name="description" content="Artigos sobre Automação, Bots, IA, Inteligência Artificial e Web Scraping. Domine as ferramentas mais avançadas como N8N, Zapier e Python." />
            </Helmet>

            <section className="section animate-fade-in" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Nosso Blog</h1>
                        <p className="hero-subtitle">Conhecimento, estratégias e engenharia profunda sobre automação.</p>
                    </div>

                    <div className="articles-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '3rem'
                    }}>
                        {posts.map(post => (
                            <article key={post.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '200px', background: post.image, position: 'relative' }}>
                                    <span style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,0,0,0.6)', padding: '5px 15px', borderRadius: '50px', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                                        {post.category}
                                    </span>
                                </div>

                                <div style={{ padding: '2rem', flex: '1', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><FiCalendar /> {post.date}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><FiClock /> {post.readTime}</span>
                                    </div>
                                    <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{post.title}</h3>
                                    <p className="text-muted" style={{ marginBottom: '2rem', flex: '1' }}>{post.excerpt}</p>

                                    <Link to={`/blog/${post.id}`} style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                                        Ler Artigo Completo <FiArrowRight />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: '5rem' }}>
                        <button className="btn btn-outline" style={{ padding: '1rem 3rem' }}>Carregar Mais Artigos</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
