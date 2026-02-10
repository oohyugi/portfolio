
import Section from '../components/Section';
import { personalInfo } from '../utils/data';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Section title="Get In Touch" subtitle="Let's connect and discuss how we can work together.">

                <div className="grid-2">
                    {/* Contact Info */}
                    <div>
                        <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>

                            <a href={`mailto:${personalInfo.email}`} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                                <div style={{ padding: '0.8rem', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)' }}>
                                    <Mail size={24} color="var(--accent-primary)" />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Email Me</span>
                                    <span style={{ fontWeight: 500 }}>{personalInfo.email}</span>
                                </div>
                            </a>

                            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                                <div style={{ padding: '0.8rem', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)' }}>
                                    <Linkedin size={24} color="var(--accent-primary)" />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>LinkedIn</span>
                                    <span style={{ fontWeight: 500 }}>Connect Profile</span>
                                </div>
                            </a>

                            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.8rem', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)' }}>
                                    <Phone size={24} color="var(--accent-primary)" />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Phone</span>
                                    <span style={{ fontWeight: 500 }}>{personalInfo.phone}</span>
                                </div>
                            </div>

                            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.8rem', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)' }}>
                                    <MapPin size={24} color="var(--accent-primary)" />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Location</span>
                                    <span style={{ fontWeight: 500 }}>{personalInfo.location}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Simple Form */}
                    <div>
                        <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
                        <form className="card" onSubmit={(e) => e.preventDefault()}>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
                                <input type="text" placeholder="Your Name" style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    color: 'white',
                                    outline: 'none'
                                }} />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                                <input type="email" placeholder="Your Email" style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    color: 'white',
                                    outline: 'none'
                                }} />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
                                <textarea rows={4} placeholder="Your Message" style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    color: 'white',
                                    fontFamily: 'inherit',
                                    outline: 'none'
                                }}></textarea>
                            </div>
                            <button className="btn" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
                        </form>
                    </div>
                </div>

            </Section>
        </div>
    );
};

export default Contact;
