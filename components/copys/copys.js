import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FIRST_BENEFITS } from "../../utils/constants";
import Image from 'next/image';
import styles from './copys.module.css';

export default function COPYS(){
  
    return (
        <div>
          <div className={styles.portada}>
            <Image
              alt="drenaje linfático"
              width={"900px"}
              height={"350px"}
              src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/drenaje_linfatico_po_W1RwK.jpg"
            ></Image>
          </div>
          <div className={styles.listDescription}>
            <h1 className="title">¿ Por qué debería tomar el curso?</h1>
            <div className="why-course">
              <p align="justify">
                Es un tratamiento de resultados
                <strong> rápidos y evidentes</strong> desde la primera sesión.
                Actualmente es una de las técnicas más
                <strong>apetecidas</strong> en el mundo de la estética.
              </p>
            </div>
          </div>
          <div className="list-description">
            <ul>
              {FIRST_BENEFITS.map((listInfo) => (
                <li key={listInfo.id}>
                  <FontAwesomeIcon className="check" icon={faCircleCheck} />
                  {listInfo.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
    )
}