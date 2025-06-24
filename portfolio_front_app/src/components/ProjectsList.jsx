import { useEffect, useState } from "react";
import Project from "./Project";
import Typography from "@mui/material/Typography";

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
      <Typography variant="h2" color="primary">
        Mes projets
      </Typography>
      <Project projects={projects} />
    </div>
  );
}
