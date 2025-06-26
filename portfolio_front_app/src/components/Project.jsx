import { Box } from "@mui/material";

export default function Project({ projects }) {
  //   const projectID = projects.id;
  return (
    <>
      {projects.map((project) => (
        <Box
          key={project.id}
          sx={{
            boxShadow: 1,
            borderRadius: "25px",
            padding: "25px",
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "secondary.main",
            },
          }}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>{" "}
          |{" "}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Code source
          </a>
        </Box>
      ))}
    </>
  );
}
