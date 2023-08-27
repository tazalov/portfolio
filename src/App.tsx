import { Footer } from './layout/Footer/Footer'
import { Header } from './layout/Header/Header'
import { Contacts, Main, Projects, Skills, Slogan } from './layout/Sections'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Skills />
      <Projects />
      {/*      <Contacts />
      <Slogan />*/}
      <Footer />
    </>
  )
}

export default App
