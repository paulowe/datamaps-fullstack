import React from "react";
import GradientBanner from "../components/gradientBanner";
import MissionSection from "../components/about/missionSection";
import OurValues from "../components/about/ourValues";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Team from "../components/about/team";
import { initializeGA, logPage } from "../components/Analytics";

class AboutPage extends React.Component {
  componentDidMount() {
    initializeGA();
    logPage();
  }

  render() {
    return (
      <div>
        <Head title="About DataMaps" />
        <Nav navType="otherNav" />
        <GradientBanner
          title="Our design process is centred around co-creation."
          subHeadline="DataMaps believes in technology’s huge potential to create learning environments that encourage co-creation with different stakeholders around a common problem."
          arrow
        />
        <MissionSection />
        <OurValues />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
