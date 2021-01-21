import BaseLayout from '@/components/layouts/BaseLayout';
import {Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed';
import { useGetUser } from '@/actions/user'

const ROLES = [
  'Full Stack Developer', 
  'Data Scientist', 
  'Machine Learning Engineer', 
  'Mobile Applications Developer', 
  'Ethical Hacker', 
  'Network Engineer', 
  'Digital Marketing', 
  'Cyber Security Associate', 
  'Game Developer']

const Index = () => {

  const { data, loading } = useGetUser()

  return (
    <BaseLayout user={data} loading={loading} className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Developer &amp; Software Engineer </h2>
                        <div className="hero-section-content-intro">
                          Take a look at my portfolio and employment history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.png"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Samm Neto.
                    Get informed, collaborate and discover projects that I have been working on over the years!
                  </h1>
                </div>
                <Typed strings={ROLES}
                      typeSpeed={70}
                      backSpeed={70}
                      backDelay={1000}
                      loopCount={0}
                      showCursor
                      className="self-typed"
                      cursorChar="|"
                      loop>
                </Typed>
                <div className="hero-welcome-bio">
                  <h1>
                    Happy Browsing!
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </BaseLayout>
  )
}

export default Index