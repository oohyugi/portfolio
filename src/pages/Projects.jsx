
import Section from '../components/Section';
import Card from '../components/Card';
import { projects } from '../utils/data';

const Projects = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Section title="Web & Mobile Projects" subtitle="Selected works demonstrating my technical capabilities.">
                <div className="grid-2">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            title={project.title}
                            subtitle={project.category}
                            description={project.description}
                            tags={project.tech}
                            links={project.links} // Pass links to Card
                        />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Projects;
