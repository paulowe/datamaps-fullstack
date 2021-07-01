import React, { useState, useEffect } from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import ProjectBanner from "../../components/projects/projectBanner";
import FeatureSlide from "../../components/featureSlider";
import ProjectTeam from "../../components/projects/projectTeam";
import axios from "axios";
import { Container, Row, Col, Card } from "reactstrap";

const items = [
  {
    imgPath:
      "https://uiuc.hack4impact.org/static/images/projects/cp/cp-feat1.png",

    title: "Login Page",
    detail: "hello"
  },
  {
    imgPath:
      "https://uiuc.hack4impact.org/static/images/projects/cp/cp-feat1.png",

    title: "Portfolio Management",
    detail: "hello"
  },
  {
    imgPath:
      "https://uiuc.hack4impact.org/static/images/projects/cp/cp-feat1.png",

    title: "Document Section",
    detail: "Hello"
  }
];

const Project = () => {
  const router = useRouter();
  const id = router.query.id;

  const [project, setProject] = useState();
  const [title, setTitle] = useState("Project Name");

  useEffect(
    () => {
      const baseUrl = process.env.baseURL || "http://localhost:8000";
      axios.get(baseUrl + "/posts/" + id).then(data => {
        const d = data.data;

        const parsedTeam = {
          type: "pics",
          detail: d.team
        };

        const newProject = {
          title: d.title,
          codeUrl: d.codeUrl,
          projectUrl: d.projectUrl,
          shortSummary: d.shortSummary,
          techStack: d.techStack,
          coverImageUrl: d.coverImageUrl,
          aboutProject: d.aboutProject,
          aboutClient: d.aboutClient,
          impact: d.impact,
          features: d.features,
          challenges: d.challenges,
          team: parsedTeam,
          featureImages: d.featureImages
        };

        setProject(newProject);
        setTitle(d.title);
      });
    },
    [id]
  );

  return (
    <div>
      <Head title={`${title} - Hack4Impact`} />
      <Nav navType="otherNav" />
      {project && (
        <div>
          <ProjectBanner
            title={project.title}
            shortSummary={project.shortSummary}
            githubLink={project.codeUrl}
            projectLink={project.projectUrl}
          />
          <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
            <Row>
              <Col md="6">
                <Card className="border-0">
                  <h5 className="card-title text-center project-detail-title">
                    Project Overview
                  </h5>
                  <div className="mt-3 img-holder">{project.aboutProject}</div>
                </Card>
              </Col>

              <Col md="6">
                <Card className="border-0">
                  <h5 className="card-title text-center project-detail-title">
                    Our Client
                  </h5>
                  <div className="mt-3 img-holder">{project.aboutClient}</div>
                </Card>
              </Col>
            </Row>
            <section>
              <Row>
                <Col md="12">
                  <h5
                    className="project-detail-title"
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    Main Features{" "}
                  </h5>
                </Col>
              </Row>

              <FeatureSlide featureImgSize={6} features={items} />
              <Row>
                <Col md="12">
                  <h5
                    className="project-detail-title"
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    Impact{" "}
                  </h5>
                </Col>
                <Col md="12">{project.impact}</Col>
              </Row>
            </section>

            <ProjectTeam team={project.team} />
          </Container>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Project;
