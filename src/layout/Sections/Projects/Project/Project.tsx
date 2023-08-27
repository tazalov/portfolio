import styled from 'styled-components'
import { Link } from '../../../../components/styled'
import { theme } from '../../../../styles/Theme'

type ProjectPT = {
  title: string
  text: string
  tech: string
  demoLink: string
  codeLink: string
}

export const Project = ({ title, text, tech, demoLink, codeLink }: ProjectPT) => {
  return (
    <StyledProject>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectTech>{tech}</ProjectTech>
      <ProjectText>{text}</ProjectText>
      <Buttons>
        <Link href={demoLink} target={'_blank'} demo>
          &lt;demo/&gt;
        </Link>
        <Link href={codeLink} target={'_blank'}>
          &lt;code/&gt;
        </Link>
      </Buttons>
    </StyledProject>
  )
}

const StyledProject = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: white;
  text-align: left;
  z-index: 2;
  padding: 10px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 40px 40px 0;
    border-style: solid;
    border-color: ${theme.colors.secondaryFort} #ffca28;
  }
`

const ProjectTitle = styled.h4`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 600;
  padding: 8px;
  color: black;
`

const ProjectText = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  padding: 8px;
  color: black;
  margin-bottom: 10px;
`

const Buttons = styled.div`
  margin-top: auto;
  padding: 5px;
  font-weight: 600;
`

const ProjectTech = styled(ProjectText)`
  border-bottom: 1px solid ${theme.colors.secondaryFort};
  border-top: 1px solid ${theme.colors.secondaryFort};
  color: ${theme.colors.secondaryFort};
`
