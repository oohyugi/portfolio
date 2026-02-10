
import Section from '../components/Section';
import { personalInfo } from '../utils/data';
import { Code, Smartphone, Rocket } from 'lucide-react';

const About = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Section title="About Me" subtitle="A little bit about who I am and what I do.">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

                    {/* Main Content */}
                    <div>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                            I am a <strong>{personalInfo.role}</strong> with a passion for building mobile applications that solve real-world problems.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            My journey started with Android development and has expanded to include cross-platform solutions with Flutter. I love clean code, good architecture (Clean Arch, MVVM), and modern UI toolkits like Jetpack Compose.
                        </p>
                        <p>
                            I thrive in collaborative environments and enjoy mentoring junior developers. Currently based in {personalInfo.location}, open to new opportunities.
                        </p>
                    </div>

                    {/* Stats / Highlights - extracted from experience */}
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Rocket size={32} color="var(--accent-primary)" />
                            <div>
                                <h3 style={{ marginBottom: '0.2rem' }}>2M+ MAU</h3>
                                <p style={{ margin: 0, fontSize: '0.9rem' }}>Maintained high-traffic apps</p>
                            </div>
                        </div>

                        <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Smartphone size={32} color="var(--accent-primary)" />
                            <div>
                                <h3 style={{ marginBottom: '0.2rem' }}>99% Crash-free</h3>
                                <p style={{ margin: 0, fontSize: '0.9rem' }}>Focus on stability & quality</p>
                            </div>
                        </div>

                        <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Code size={32} color="var(--accent-primary)" />
                            <div>
                                <h3 style={{ marginBottom: '0.2rem' }}>Modern Stack</h3>
                                <p style={{ margin: 0, fontSize: '0.9rem' }}>Jetpack Compose & Flutter</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
};

export default About;
