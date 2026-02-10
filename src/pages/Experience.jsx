
import Section from '../components/Section';
import { experience } from '../utils/data';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Section title="Work Experience" subtitle="My professional journey and career highlights.">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {experience.map((job) => (
                        <div key={job.id} className="card" style={{ position: 'relative', overflow: 'hidden' }}>

                            {/* Header */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem', gap: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{job.role}</h3>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                    <Calendar size={16} /> {job.period}
                                </span>
                            </div>

                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Briefcase size={18} /> {job.company}
                            </h4>

                            <p style={{ marginBottom: '1.5rem' }}>{job.description}</p>

                            {/* Achievements */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h5 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Key Achievements:</h5>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                                    {job.achievements.map((ach, idx) => (
                                        <li key={idx} style={{ marginBottom: '0.5rem', listStyleType: 'disc' }}>
                                            {ach}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                                {job.stack.map(tech => (
                                    <span key={tech} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.2rem 0.6rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '4px',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Experience;
