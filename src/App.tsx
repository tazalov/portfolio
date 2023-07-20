import "./App.css";
import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Sections/Main/Main";
import { Skills } from "./layout/Sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
    </div>
  );
}

export default App;
