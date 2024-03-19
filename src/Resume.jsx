import React from 'react';
import resumeData from '../data/resume';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <div>
        <h3>Education</h3>
        <ul>
          {resumeData.studies.map(study => (
            <li key={study.id}>
              <h4>{study.title}</h4>
              <p>{study.institution}</p>
              <p>{study.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Experience</h3>
        <ul>
          {resumeData.experiences.map(experience => (
            <li key={experience.id}>
              <h4>{experience.title}</h4>
              <p>{experience.company}</p>
              <p>{experience.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
