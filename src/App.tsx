import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Sections/Main/Main";
import { Skills } from "./layout/Sections/Skills/Skills";
import { Projects } from "./layout/Sections/Projects/Projects";
import { Contacts } from "./layout/Sections/Contacts/Contacts";
import { Slogan } from "./layout/Sections/Slogan/Slogan";
import { Footer } from "./layout/Footer/Footer";
import styled from "styled-components";

function App() {
  return (
    <StyledApp>
      <Header />
      <Main />
      <Slogan />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div``;
