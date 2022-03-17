import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from './mockup.module.css';
import Image from 'next/image';
export default function MockupLeft({ parentToChild }) {
  return (
    <div className="copy-one">
      <Container>
        <h3 className="title"> {parentToChild.title}</h3>
        <Row className="copy-list">
          <Col xs={4}>
            <div>
              <Image
                className={styles.mockupCopyLeft}
                src={parentToChild.img}
                width={"10"}
                height={"20"}
                alt="drenaje linfático brasielño"
              ></Image>
            </div>
          </Col>
          <Col xs={8}>
            <ul className="mockup-list">
              {parentToChild.copys.map(function (name, index) {
                  return (<li key={index}>
                    <p align="justify">
                      <FontAwesomeIcon className="check" icon={faCircleCheck} />
                      {name}
                    </p>
                  </li>)
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
