import '../config/listprojects';
import { projects } from '../config/listprojects';
import '../styles/Project.css';
const Project = () => {
    return (
        <div className="project-container">
            <h2>Mis Proyectos</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <a href={project.url} target='blank' rel='noopener noreferrer'>{project.title}</a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;