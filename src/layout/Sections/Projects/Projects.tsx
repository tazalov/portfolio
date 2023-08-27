import { useState } from 'react'
import styled from 'styled-components'
import { Container, FlexWrapper, SectionTitle } from '../../../components/styled'
import { Menu } from './Menu/Menu'
import { Project } from './Project/Project'

export type TabT = {
  id: number
  text: FilterT
}

const tabItems: TabT[] = [
  { id: 1, text: 'landing' },
  { id: 3, text: 'spa' },
  { id: 4, text: 'all' },
]

export type FilterT = 'landing' | 'spa' | 'all'

export const Projects = () => {
  const projects = [
    {
      id: 1,
      tech: 'HTML, CSS, JS, ADAPTIVE',
      title: 'ANY NFT',
      text: 'Landing page, own design. All the dogs are drawn by me :)',
      tabName: 'landing',
      demoLink: 'https://tazalov.github.io/anynft/',
      codeLink: 'https://github.com/tazalov/anynft',
    },
    {
      id: 2,
      tech: 'HTML, CSS, JS, NO-ADAPTIVE',
      title: 'CAR REPAIR',
      text: 'Layout according to the finished layout. Without adaptive.',
      tabName: 'landing',
      demoLink: 'https://tazalov.github.io/carrepair',
      codeLink: 'https://github.com/tazalov/carrepair',
    },
    {
      id: 3,
      tech: 'REACT, TS, STYLED COMPONENTS',
      title: 'PORTFOLIO',
      text: 'The landing page is developed on React. You see him now.',
      tabName: 'landing',
      demoLink: '#1',
      codeLink: 'https://github.com/tazalov/portfolio',
    },
    {
      id: 4,
      tech: 'REACT (legacy), TS, REDUX, WORK WITH API, WEBSOCKET',
      title: 'SOCIAL NETWORK',
      text: 'The third-party API is not complete, but it looks cool. To log in, you can use: free@samuraijs.com:free',
      tabName: 'spa',
      demoLink: 'https://tazalov.github.io/samurai_social',
      codeLink: 'https://github.com/tazalov/samurai_social',
    },
    {
      id: 5,
      tech: 'REACT, SCSS, TS, REDUX TOOLKIT, MOCK API',
      title: 'REACT PIZZA',
      text: 'Working on a more modern stack, some functions may work a little incorrectly, because was used "mock api"',
      tabName: 'spa',
      demoLink: 'https://tazalov.github.io/react_pizza',
      codeLink: 'https://github.com/tazalov/react_pizza',
    },
  ]
  const [filter, setFilter] = useState<FilterT>('all')
  let filteredProjects = projects

  switch (filter) {
    case 'landing': {
      filteredProjects = projects.filter(el => el.tabName === 'landing')
      break
    }
    case 'spa': {
      filteredProjects = projects.filter(el => el.tabName === 'spa')
      break
    }
    default: {
      filteredProjects = projects
      break
    }
  }

  const changeFilter = (value: FilterT) => {
    setFilter(value)
  }

  return (
    <StyledProjects id={'projects'}>
      <Container>
        <SectionTitle>
          <span>import </span>
          <i>p</i>
          <span> from </span>
          <code>'../Projects'</code>
          <span>;</span>
        </SectionTitle>
        <Menu tabItems={tabItems} changeFilter={changeFilter} filter={filter} />
        <BorderWrapper wrap={'wrap'} justify={'flex-start'} relative>
          {filteredProjects.map(el => (
            <Project
              key={el.id}
              tech={el.tech}
              title={el.title}
              text={el.text}
              demoLink={el.demoLink}
              codeLink={el.codeLink}
            />
          ))}
        </BorderWrapper>
        <SectionTitle></SectionTitle>
      </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section``

const BorderWrapper = styled(FlexWrapper)`
  background-color: #ffca28;
  border-radius: 0 10px 10px 10px;
  padding: 20px;
`
