import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Section from "../section";
import BlockQuote from "../blockQuote";
import ActionButton from "../actionButton";
import Link from "next/link";

const InvolveSection = () => (
  <Section grey>
    <Container>
      <Row>
        <Col md="12">
          <h1 className="section-title text-center">Get Involved</h1>
        </Col>
        <Row className="involved-body">
          <Col md="5">
            <div className="involved-container">
              <h3 className="text-title text-center">Students</h3>
              <Link href="/apply/students">
                <img
                  src="/static/images/ideathon20.jpg"
                  className="img-fluid"
                />
              </Link>
            </div>
            <Row>
              <p
                style={{
                  padding: "38px 0 35px 0"
                }}
              >
                Are you passionate about <b>software and social impact</b>? Are
                you looking to join a unique and close-knit community? Join Us!
                Our mission provides a distinct experience to develop technical
                skills and interact with various stakeholder clients all while
                applying your skills to impact real lives.
              </p>

              <div className="text-center">
                <ActionButton white link="/apply/students" text="Learn More" />
              </div>
            </Row>
          </Col>
          <Col md="5" className="offset-md-2">
            <div className="involved-container">
              <h3 className="text-title text-center">Faculty</h3>
              <Link href="/apply/students">
                <img
                  src="/static/images/ideathon19.jpg"
                  className="img-fluid"
                />
              </Link>
              <Row>
                <BlockQuote
                  text="Working with the DataMaps team was easy, efficient and incredibly
                        productive. They were quick to understand what we were looking to
                        achieve and made the app even better and simpler to use than what
                        I had imagined."
                  author="- Marierose Talla (she/her),"
                  position="Gloabal Learning Coordinator | York International"
                />
                <div className="text-center">
                  <ActionButton
                    white
                    link="/apply/nonprofits"
                    text="Learn More"
                  />
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
    <style jsx>{`
      img {
        display: block;
        margin: 7% auto;
        border-radius: 5px;
        box-shadow: 2px 2px 2px grey;
        max-height: 260px; /* Temporary to preserve image heights */
      }
      .involved-container {
        margin-top: 30px;
      }
      .involved-container h3 {
        color: #666b72;
      }
    `}</style>
  </Section>
);

export default InvolveSection;
