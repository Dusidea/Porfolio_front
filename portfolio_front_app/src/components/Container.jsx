import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <Box
          sx={{
            bgcolor: "primary.main",
            // "&:hover": {
            //   bgcolor: "primary.dark",
            // },
            height: "100vh",

            padding: "50px",
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
