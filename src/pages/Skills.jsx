
import Section from '../components/Section';
import { skills } from '../utils/data';

const Skills = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Section title="Technical Skills" subtitle="Technologies and tools I work with.">

                <div className="grid-3">
                    {skills.map((skill) => (
                        <div key={skill.name} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                            <skill.icon size={32} color="var(--accent-primary)" />
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{skill.name}</h3>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </Section>
        </div>
    );
};

export default Skills;
