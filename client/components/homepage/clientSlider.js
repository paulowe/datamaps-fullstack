import BackgroundSlider from "../backgroundSlider";
import { Row } from "reactstrap";
import Link from "next/link";

const clients = [
  {
    name: "York",
    width: 250,
    height: 55,
    logoPath: "/static/images/york.png",
    link: "/projects?name=yorku"
  },
  {
    name: "Kiva-1",
    width: 160,
    height: 55,
    logoPath: "/static/images/client_logos/kivalogo.png",
    link: "/projects?name=kiva-1"
  },
  {
    name: "Glendon College",
    width: 135,
    height: 130,
    logoPath: "/static/images/glendon.png",
    link: "/projects?name=pr"
  },
  {
    name: "C2TC",
    width: 130,
    height: 130,
    logoPath: "/static/images/client_logos/c2tclogo.png",
    link: "/projects?name=safemaps"
  },
  {
    name: "Global Giving",
    width: 250,
    height: 40,
    logoPath: "/static/images/client_logos/gglogo.png",
    link: "/projects?name=gg-2"
  },
  {
    name: "Monterrey",
    width: 250,
    height: 40,
    logoPath: "/static/images/monterrey.png",
    link: "/projects?name=monterrey"
  },
  {
    name: "NNB",
    width: 250,
    height: 50,
    logoPath: "/static/images/client_logos/nnblogo.png",
    link: "/projects?name=nnb-1"
  },
  {
    name: "Spreadsheet Map",
    width: 150,
    height: 100,
    logoPath: "/static/images/values/value-1.svg",
    link: "/projects?name=spreadsheet-map"
  }
];
export default () => (
  <Row>
    <div className="showcase-container">
      <BackgroundSlider duration={40}>
        <div className="client-logo-container">
          {clients.map(client => (
            <div key={client.name}>
              <Link href={client.link}>
                <a>
                  <img
                    width={client.width}
                    height={client.height}
                    src={client.logoPath}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </BackgroundSlider>
    </div>
    <style jsx>{`
      .showcase-container {
        margin-bottom: 40px;
        overflow: hidden;
        width: 100%;
      }
      .client-logo-container {
        white-space: nowrap;
        overflow: hidden;
      }
      .client-logo-container > div {
        display: inline-block;
        padding: 0 50px;
        vertical-align: middle;
        opacity: 0.25;
        outline: none;
        cursor: default;
        transition: opacity 0.2s ease;
      }
      .client-logo-container > div:hover {
        opacity: 0.8;
      }
    `}</style>
  </Row>
);
