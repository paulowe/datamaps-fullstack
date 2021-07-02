/*
  Mission Section holding the photo and our mission in the /about page
*/
import { Container, Row, Col } from "reactstrap";
import { Spring } from "react-spring";

const MissionSection = () => (
  <section className="mission-section">
    <Container>
      <Row>
        <Col md="12" className="text-center">
          <h2 className="project-detail-title">Our Mission</h2>
        </Col>
      </Row>

      <Row>
        <Col md="12" className="text-center">
          <p className="mission-body-text">
            DataMaps exists for both students and faculty. We connect student
            software developers with faculty and other socially responsible
            stakeholders to develop powerful new tools for open education. This
            enables educational institutions to further their mission and better
            engage their students. We are committed to increasing awareness of
            technology&#39;s potential for good in supporting academic
            initiatives.
          </p>
        </Col>
      </Row>
      <Row>
        <Spring
          from={{ transform: "translate3d(0,300px,0)" }}
          to={{ transform: "translate3d(0,0,0)" }}
        >
          {props => (
            <div className="text-center img-holder">
              <img
                alttext="Transnational Ideathon 2019 team photo"
                style={props}
                src="/static/images/ideathon19.jpg"
                className="shadow"
                id="mission-team"
              />
            </div>
          )}
        </Spring>
      </Row>
    </Container>
    <style jsx>{`
      @media (max-width: 768px) {
        #mission-team {
          width: 100%;
        }
        .img-holder {
          overflow: hidden;
          max-width: 100%;
        }
      }
      #mission-team {
        max-width: 700px;
        margin-top: 30px;
      }
      .mission-body-text {
        color: #323648;

        font-weight: 550;
        letter-spacing: 0.6px;
      }
    `}</style>
  </section>
);

export default MissionSection;
