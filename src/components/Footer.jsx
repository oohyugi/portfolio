
import { Heart } from 'lucide-react';
import { personalInfo } from '../utils/data';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: 'auto',
            backgroundColor: 'var(--bg-secondary)'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    {personalInfo.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <item.icon size={24} />
                        </a>
                    ))}
                </div>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    Made with <Heart size={14} fill="var(--accent-primary)" color="var(--accent-primary)" /> by Yogi Putra
                </p>
                <p style={{ fontSize: '0.8rem', color: '#555', marginTop: '0.5rem' }}>
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
