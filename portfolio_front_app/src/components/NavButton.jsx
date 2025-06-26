import { Button } from "@mui/material";

const NavButton = ({ href, children }) => (
  <Button
    variant="contained"
    color="inherit"
    component="a"
    href={href}
    size="large"
    sx={{
      textTransform: "none",
      fontWeight: "bold",
      bgcolor: "primary.main",
      "&:hover": {
        bgcolor: "secondary.main",
      },
      mx: "10px",
    }}
  >
    {children}
  </Button>
);

export default NavButton;
