import ProjectsList from "../components/ProjectsList";
import Bio from "../components/Bio";
import Container from "../components/Container";
import Typography from "@mui/material/Typography";
import HeroHeader from "../components/Header";

function HomePage() {
  return (
    <Container>
      <HeroHeader />
      <Bio />
      <ProjectsList />
    </Container>
  );
}
export default HomePage;
