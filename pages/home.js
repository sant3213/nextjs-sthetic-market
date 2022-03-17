import Link from "next/link";
// import Layout from '../components/layout'
import Head from "../components/head/head";
import Header from "../components/header/Header";
import COPYS from "../components/copys/copys";
import Pleasures from "../components/pleasures/pleasures";
import MockupLeft from "../components/mockup/mockupLeft";
import MockupRight from "../components/mockup/MockupRight";
import Results from "../components/results/results";
import Slide from "../components/slide/slide";
import Footer from "../components/footer/footer";
import { Row } from "react-bootstrap";
import { secondMockup, firstMockup } from "../utils/constants";

export default function HomePage() {
  return (
    <div>
      <Head />
      <Header />
      <COPYS />
      <Row className="container-btn"></Row>
      <Link href="https://go.hotmart.com/S66618608K?ap=cbdc">
        <Row className="container-btn">
          <div className="blob">
            <h4 className="center">Quiero tomar el curso</h4>
          </div>
        </Row>
      </Link>
      <Pleasures />
      <hr className="line"></hr>
      <MockupLeft parentToChild={firstMockup} />
      <MockupRight parentToChild={secondMockup} />
      <hr className="line"></hr>
      <Slide />
      <hr className="line"></hr>
      <Results />
      <Footer />
    </div>
  );
}
