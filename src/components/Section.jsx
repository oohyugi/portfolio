
import { motion } from 'framer-motion';

const Section = ({ title, subtitle, children, id, className = "" }) => {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem' }}
                >
                    {title && (
                        <h2 className="section-title">
                            {title} <span style={{ color: 'var(--accent-primary)' }}>.</span>
                        </h2>
                    )}
                    {subtitle && (
                        <p className="section-subtitle" style={{ fontSize: '1.1rem', maxWidth: '600px' }}>
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
