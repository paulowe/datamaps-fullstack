import { Component } from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";
import GradientBanner from "../../components/gradientBanner";
import ErrorMessage from "../../components/errorMessage";
import ProjectExplore from "../../components/projects/projectExplore";
import Footer from "../../components/footer";
import { initializeGA, logPage } from "../../components/Analytics";
import ProjectList from "../../components/projects/newprojectList";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    initializeGA();
    logPage();
  }

  static async getInitialProps({ query, pathname }) {
    return { query };
  }
  render() {
    const { query } = this.props;
    const dummy = [1, 2, 3];

    // return project List (regular project Page) if not query (just /projets)
    if (Object.keys(query).length === 0 && query.constructor === Object) {
      return (
        <div>
          <Head title="DataMaps Projects" />
          <Nav navType="otherNav" />
          <GradientBanner
            arrow
            title="Our Work"
            subHeadline="In today&#39;s world, we are capable of changing the lives of those
                halfway across the globe. While tech has enabled us to have a
                larger reach, we also understand that we have a responsibility
                to build tools that are more inclusive and accessible. We strive
                to build tools that are adaptable to fit the needs of others and reduce the digital divide."
            buttonText="Our Github"
            buttonLink="https://github.com/paulowe"
          />
          <ProjectList />
          <ProjectExplore />
          <Footer />
        </div>
      );
    }

    // project DNE and not just /projects (regular project Page)
    return (
      <div>
        <ErrorMessage message="Project Doesn&#39;t exist" />
      </div>
    );
  }
}

export default Projects;
