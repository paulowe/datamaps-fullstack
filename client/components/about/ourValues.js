import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  CardText,
  CardBody
} from "reactstrap";
import Section from "../section";
// values used in the component below
const values = [
  {
    title: "Ideathon",
    text: (
      <>
        We conceived of an ideathon to{" "}
        <a href="https://www.glendon.yorku.ca/gnl/bilingual-certificate-in-civic-and-social-stewardship-glendon-college/">
          allow the framing of the co-creation process with foreign students
          from France
        </a>
        , with the goal of conceptualizing these teaching/learning OER
        applications. <br />
        <br /> The ideathon process also gave students the opportunity to
        develop or be aware of skills required to acquire – intercultural
        fluency competencies, 21st century competencies (team work, digital
        fluency, creative and critical thinking skills), plurilingualism
      </>
    ),
    imagePath: "/static/images/values/value-3.svg"
  },
  {
    title: "Creathon",
    text: (
      <>
        We built on the ideathons through a creathon, pivoting to co-creation
        with students from the{" "}
        <a href="https://lassonde.yorku.ca">Lassonde School of Engineering </a>
        to develop reliable software architecture and implementations that
        concretize these ideas and are practicable. This also fostered the
        development of skills such as interdisciplinarity, and digital
        competencies.
      </>
    ),
    imagePath: "/static/images/values/value-2.svg"
  },
  {
    title: "Consultations",
    text: (
      <>
        The final phase was integrating the products into real world spaces,
        getting feedback from stakeholders, and pivoting based on that feedback
        – This phase is to ensure the stakeholder engagement, empathy,
        reflection and critical thinking around the OER teaching/learning
        application to ensure their takeup and use of the tool. <br />
        <br /> We worked with the intention to build solutions that are right
        for our clients and their users. We carefully assess the concerns of our
        users, stakeholders, and clients, to develop a custom solution that fits
        those precise constraints.
      </>
    ),
    imagePath: "/static/images/values/value-1.svg"
  }
];

const OurValues = () => (
  <Section darkgrey>
    <Container>
      <Row>
        <div className="text-center project-detail-title">
          <h2>Our Approach</h2>
        </div>
      </Row>

      <CardDeck>
        {values.map(value => (
          <Card key={value.title}>
            <img
              className="card-img-top"
              src={value.imagePath}
              alt="Community"
            />
            <CardBody>
              <h5 className="text-title card-title"> {value.title} </h5>
              <CardText>{value.text}</CardText>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    </Container>
  </Section>
);

export default OurValues;
