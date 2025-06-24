export default function Project({ projects }) {
  //   const projectID = projects.id;
  return (
    <>
      {projects.map((project) => (
        <li key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>{" "}
          |{" "}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Code source
          </a>
        </li>
      ))}
    </>
  );
}
