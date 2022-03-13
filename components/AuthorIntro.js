import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => {
  return (
    <Row>
      <Col md="8">
        {/* AUTHOR INTRO STARTS */}
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src='../assets/my-photo-flower.jpg'
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">Hey Friends,</h5>
            <p className="welcome-text">
            My name is Jingting Liu and I am an experienced Front End software engineer and developer at CPM.
            This is my blog page.
            </p>
          </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
      </Col>
    </Row>
  )
}

export default AuthorIntro;
