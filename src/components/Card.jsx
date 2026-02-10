
import { ArrowUpRight } from 'lucide-react';

const Card = ({ title, subtitle, description, tags = [], link, links = [] }) => {
    return (
        <div
            className="card"
            onClick={() => link && window.open(link, '_blank')}
            style={{
                cursor: link ? 'pointer' : 'default',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <div>
                    <h3 style={{ marginBottom: '0.25rem' }}>{title}</h3>
                    {subtitle && <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600 }}>{subtitle}</span>}
                </div>
                {link && <ArrowUpRight size={20} color="var(--text-secondary)" />}
            </div>

            <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', flex: 1 }}>{description}</p>

            {tags.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: links.length > 0 ? '1.5rem' : '0' }}>
                    {tags.map(tag => (
                        <span
                            key={tag}
                            style={{
                                fontSize: '0.8rem',
                                padding: '0.25rem 0.75rem',
                                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                                color: 'var(--accent-primary)',
                                borderRadius: '100px'
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {links.length > 0 && (
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {links.map((l, i) => (
                        <a
                            key={i}
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.85rem',
                                color: 'var(--text-primary)',
                                textDecoration: 'none',
                                padding: '0.5rem 1rem',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                borderRadius: '6px',
                                transition: 'background 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                        >
                            {l.label} <ArrowUpRight size={14} />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Card;
