import styled from 'styled-components'
import { Container, GridWrapper, SectionSubtitle, SectionTitle } from '../../../components/styled'
import { Cursor } from '../Main/Main'
import { Skill } from './Skill/Skill'

export const Skills = () => {
  return (
    <StyledSkills id={'skills'}>
      <Container>
        <SectionTitle>
          <span>const</span> <code>skillsArray</code> = <span>[</span>
        </SectionTitle>
        <GridWrapper countCol={6} widthCol={'1fr'} autoRows={'1fr'}>
          <Skill iconId={'react'} title={'react'} />
          <Skill iconId={'redux'} title={'redux & toolkit'} />
          <Skill iconId={'styled'} title={'styled component'} />
          <Skill iconId={'ts'} title={'typescript'} />
          <Skill iconId={'yarn'} title={'yarn'} />
          <Skill iconId={'git'} title={'git'} />
          <Skill iconId={'tests'} title={'tests'} />
          <Skill iconId={'code'} title={'html5'} />
          <Skill iconId={'css'} title={'css3'} />
          <Skill iconId={'sass'} title={'sass/scss'} />
          <Skill iconId={'js'} title={'javascript'} />
        </GridWrapper>
        <SectionTitle>
          <span>
            ];<Cursor>|</Cursor>
          </span>
        </SectionTitle>
        <SectionSubtitle>/* P.S. The list may be incomplete. */</SectionSubtitle>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section``
