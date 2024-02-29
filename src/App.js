import { Container, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Feed from "./components/Feed";
import { theme } from "./Shared Components/Style";
import { StyledStack } from "./css/Styl";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        <StyledStack direction={{ xs: "column", sm: "row" }}>
          <SideNav />
          <Feed />
        </StyledStack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
