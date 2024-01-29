import styled, { keyframes } from 'styled-components'
import photo from '../../../assets/img/photo.webp'
import { Container, FlexWrapper, SectionSubtitle, SectionTitle } from '../../../components/styled'
import { theme } from '../../../styles/Theme'

export const Main = () => {
  return (
    <StyledMain id={'home'}>
      <Container>
        <StyledDev justify={'space-between'} align={'center'}>
          <div>
            <SectionTitle>
              <pre>
                <span>const</span> <code>dev</code> = <span>&#123;</span>
                <br />
                {'  '}
                <i>name:</i> 'Iliya Tazalov',
                <br />
                {'  '}
                <i>direction:</i> 'front-end',
                <br />
                {'  '}
                <i>about:</i> 'one you need'
                <br />
                <span>
                  &#125;;
                  <Cursor>|</Cursor>
                </span>
              </pre>
            </SectionTitle>
            <SectionSubtitle>
              /* He will do any tasks for you.
              <br />
              He will even fix bugs left by other
              <br />
              developers as long as his heart beats. */
            </SectionSubtitle>
          </div>
          <MainPhoto>
            <img src={photo} alt="" />
          </MainPhoto>
        </StyledDev>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  position: relative;
  @media ${theme.media.tablet} {
    min-height: 90vh;
  }
  @media ${theme.media.mobile} {
    min-height: 80vh;
  }
`

const StyledDev = styled(FlexWrapper)`
  @media ${theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const MainPhoto = styled.div`
  position: relative;
  z-index: 2;
  img {
    max-width: 400px;
    height: auto;
    width: 100%;
    border-radius: 50%;
  }
`

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Cursor = styled.abbr`
  color: ${theme.colors.primaryFont};
  animation: ${blinkAnimation} 1s infinite;
`
