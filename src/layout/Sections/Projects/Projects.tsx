import { Container, GridWrapper, SectionTitle } from '../../../components/styled'
import { Project } from './Project/Project'

const projects = [
  {
    id: 1,
    tech: 'HTML, CSS, JS, ADAPTIVE',
    title: 'ANY NFT',
    text: 'Landing page, own design. All the dogs are drawn by me :)',
    demoLink: 'https://tazalov.github.io/anynft/',
    codeLink: 'https://github.com/tazalov/anynft',
  },
  {
    id: 3,
    tech: 'REACT, TS, STYLED COMPONENTS',
    title: 'PORTFOLIO',
    text: 'The landing page is developed on React. You see him now.',
    codeLink: 'https://github.com/tazalov/portfolio',
  },
  {
    id: 4,
    tech: 'REACT (legacy), TS, REDUX',
    title: 'SOCIAL NETWORK',
    text: 'The third-party API is not complete, but it looks cool. To log in, you can use: free@samuraijs.com:free',
    demoLink: 'https://tazalov.github.io/social_ts',
    codeLink: 'https://github.com/tazalov/social_ts',
  },
  {
    id: 5,
    tech: 'REACT, SCSS, TS, RTK',
    title: 'REACT PIZZA',
    text: 'Working on a more modern stack, some functions may work a little incorrectly, because was used "mock api"',
    tabName: 'spa',
    demoLink: 'https://tazalov.github.io/react_pizza',
    codeLink: 'https://github.com/tazalov/react_pizza',
  },
  {
    id: 6,
    tech: 'REACT, MUI, TS, RTK, Storybook',
    title: 'TODOLIST',
    text: 'Organize your affairs properly. Here. Implemented a change of theme and language. To log in, you can use: free@samuraijs.com:free',
    tabName: 'spa',
    demoLink: 'https://tazalov.github.io/todolist',
    codeLink: 'https://github.com/tazalov/todolist',
  },
  {
    id: 7,
    tech: 'REACT, SCSS, TS, RTK Query, Storybook, Radix',
    title: 'HAPPY QUIZ',
    text: 'The project was implemented in a team. A useful replacement for "paper" cards. A language change has been implemented. To log in, you can use: test@test.com:test',
    tabName: 'spa',
    demoLink: 'https://happy-quiz-app.vercel.app',
    codeLink: 'https://github.com/tazalov/flash_cards',
  },
]

export const Projects = () => {
  return (
    <section>
      <Container>
        <SectionTitle>
          <span>import </span>
          <i>p</i>
          <span> from </span>
          <code>'../Projects'</code>
          <span>;</span>
        </SectionTitle>
        <GridWrapper countCol={3} widthCol={'1fr'}>
          {projects.map(el => (
            <Project
              key={el.id}
              tech={el.tech}
              title={el.title}
              text={el.text}
              demoLink={el.demoLink}
              codeLink={el.codeLink}
            />
          ))}
        </GridWrapper>
      </Container>
    </section>
  )
}
