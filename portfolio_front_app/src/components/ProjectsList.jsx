import { useEffect, useState } from "react";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Mes projets</h1>
      <ul>
        {projects.map(({ id, title, description, url, github }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>{" "}
            |{" "}
            <a href={github} target="_blank" rel="noopener noreferrer">
              Code source
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
