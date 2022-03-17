import { Row, Col } from "react-bootstrap";
import { imagesSrc } from "../../utils/information/imageSources";
import Image from 'next/image'
export default function Results() {
  return (
    <div>
      <h1 className="title">Resultados en pacientes</h1>
      <Row>
        {imagesSrc.first.map((image) => (
          <Col key={image}>
            <Image alt="drenaje linfatico" src={image} className="result" width={"10"} height={"20"}></Image>
          </Col>
        ))}
      </Row>
      <Row>
        {imagesSrc.second.map((image) => (
          <Col key={image}>
            <Image alt="drenaje linfatico" src={image} className="result" width={"10"} height={"20"}></Image>
          </Col>
        ))}
      </Row>
    </div>
  );
}
