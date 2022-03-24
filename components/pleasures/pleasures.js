import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { secondBenefits } from "../../utils/constants";
import {IMAGES_DATA} from '../../utils/constants';
import Image from 'next/image'
import styles from './pleasures.module.css';

export default function Pleasures() {
  
  return (
    <div>
      <h1 className="title">¿ Qué vas Aprender?</h1>
      <Container>
        <ul className={styles.learningList}>
          {IMAGES_DATA.map((imageData) => (
            <li key={imageData.id}>
              <Image
                className={styles.iconList}
                alt="drenaje linfático"
                src={`${imageData.source}`}
                width={"30"}
                height={"35"}
              ></Image>
              {imageData.title}
            </li>
          ))}
        </ul>
        <div className={styles.learningListContainer}>
          <ul className={styles.learningList}>
            {secondBenefits.map((list) => (
              <li key={list.id}>
                <FontAwesomeIcon className="check" icon={faCircleCheck} />
                {list.value}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
