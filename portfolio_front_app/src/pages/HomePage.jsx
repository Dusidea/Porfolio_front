import ProjectsList from "../components/ProjectsList";
import Bio from "../components/Bio";
import Container from "../components/Container";
import Typography from "@mui/material/Typography";
import HeroHeader from "../components/Header";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <Container>
      <Nav />
      <HeroHeader />
      <Bio />
      <ProjectsList />
    </Container>
  );
}
export default HomePage;
