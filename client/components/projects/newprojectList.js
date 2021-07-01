import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectCards from "./projectCards";
import axios from "axios";

const projectList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const baseUrl = process.env.baseURL || "http://localhost:8000";
    axios.get(baseUrl + "/posts").then(data => {
      console.log(data.data);
      setPosts(data.data);
    });
  }, []);

  return (
    <Container>
      <div>
        {posts.map(post => (
          <div>
            <Row>
              <h1
                className="section-title center"
                style={{ marginTop: "25px" }}
              >
                {post.semesterName}
              </h1>
            </Row>
            <Row>
              {post.projects.map(project => (
                <Col md="4" sm="6" style={{ marginBottom: "25px" }}>
                  <ProjectCards
                    title={project.title}
                    imgPath={project.coverImageUrl}
                    id={project._id}
                    subTitle={project.shortSummary}
                  />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default projectList;
