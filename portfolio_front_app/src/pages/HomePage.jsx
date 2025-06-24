import ProjectsList from "../components/ProjectsList";
import Bio from "../components/Bio";
import Container from "../components/Container";
import Typography from "@mui/material/Typography";

function HomePage() {
  return (
    // <Typography variant="body1">
    <Container>
      <Bio />

      <ProjectsList />
    </Container>
    // </Typography>
  );
}
export default HomePage;
