import { Paper, Stack } from "@mui/material";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
          sx={{ height: "max-content" }}
        >
          <Logo />
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;
