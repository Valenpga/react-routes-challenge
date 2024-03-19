import React from 'react';
import projectsData from '../data/projects';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projectsData.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name} />
            <a href={project.url}>Visit project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
