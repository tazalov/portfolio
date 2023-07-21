import "./App.css";
import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Sections/Main/Main";
import { Skills } from "./layout/Sections/Skills/Skills";
import { Projects } from "./layout/Sections/Projects/Projects";
import { Contacts } from "./layout/Sections/Contacts/Contacts";
import { Slogan } from "./layout/Sections/Slogan/Slogan";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Slogan />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
