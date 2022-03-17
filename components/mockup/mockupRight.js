import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import styles from './mockup.module.css';
export default function MockupRight({ parentToChild }) {
  return (
    <div className="copy-one">
      <Container>
        <h3 className="title"> {parentToChild.title}</h3>
        <Row className="copy-list">
          <Col xs={8}>
            <ul className="mockup-list">
              {parentToChild.copys.map(function (name, index) {
                return (
                  <li key={index}>
                    {" "}
                    <p align="justify">
                      {" "}
                      <FontAwesomeIcon className="check" icon={faCircleCheck} />
                      {name}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col xs={4}>
            <div>
              <Image
                className={styles.mockupCopyLeft}
                src={parentToChild.img}
                alt="drenaje linfático brasielño"
                width={"10"}
                height={"20"}
              ></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
