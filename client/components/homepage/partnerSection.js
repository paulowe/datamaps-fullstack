import Section from "../section";
import { Container, Row, Col, Button } from "reactstrap";
import ActionLink from "../actionLink";

export default () => (
  <Section className="partners-section">
    <Container>
      <Row>
        <h1 className="section-title center" style={{ marginBottom: "50px" }}>
          Our Partners
        </h1>
      </Row>
      <Row>
        <Col className="text-right">
          <img
            width="140"
            height="173"
            src="/static/images/glendon.png"
            className="center partner-logos"
          />
        </Col>
        <Col>
          <img
            width="170"
            height="170"
            src="/static/images/lassonde.png"
            className="center partner-logos"
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-right">
          <img
            width="170"
            height="157"
            src="/static/images/usfq.png"
            className="center partner-logos"
          />
        </Col>

        <Col>
          <img
            width="260"
            height="69"
            src="/static/images/monterrey.png"
            className="center partner-logos"
          />
        </Col>
      </Row>

      <Row>
        <div className="center partner-button">
          <ActionLink
            text="Partner With Us"
            link="https://h4i-sponsor.now.sh"
          />
        </div>
      </Row>
    </Container>
    <style jsx>{`
      .partners-section h2 {
        font-size: 20px;
        text-align: center;
        margin-bottom: 50px;
        color: #373f46;
        opacity: 0.7;
        font-weight: 300;
      }
      .partner-button {
        margin-top: 30px !important;
      }
      .partner-logos {
        margin: 10px 60px;
      }
    `}</style>
  </Section>
);
