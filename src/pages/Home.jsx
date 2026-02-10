
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../utils/data';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

            {/* Background Elements */}
            <div className="neon-accent" style={{ top: '20%', right: '10%' }}></div>
            <div className="neon-accent" style={{ bottom: '20%', left: '10%', backgroundColor: '#64ffda' }}></div>

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        marginBottom: '1rem',
                        display: 'block'
                    }}>
                        HELLO, I'M
                    </span>

                    <h1 style={{ marginBottom: '1.5rem', maxWidth: '800px' }}>
                        {personalInfo.name} <br />
                        <span style={{ color: 'var(--text-secondary)' }}>Based in {personalInfo.location.split(',')[0]}.</span>
                    </h1>

                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                        {personalInfo.bio}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn">
                            Let's Talk <ArrowRight size={18} />
                        </Link>
                        <Link to="/experience" className="btn btn-outline">
                            View My Work
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
