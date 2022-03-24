import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FIRST_BENEFITS } from "../../utils/constants";
import Image from "next/image";
import styles from "./copys.module.css";
import Link from "next/link";

export default function COPYS() {
  return (
    <div>
      <div className={styles.portada}>
        <Image
          alt="drenaje linfático"
          width={"1100px"}
          height={"350px"}
          src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/drenaje_linfatico_po_W1RwK.jpg"
        ></Image>
      </div>
      <div className={styles.listDescription}>
        <div className={styles.btnWrapper}>
          <div className={styles.buttonPromo}>
            <Link href="https://go.hotmart.com/S66618608K?ap=cbdc">
              <span className={styles.btnPromo}>¡QUIERO UNIRME AL CURSO!</span>
            </Link>
          </div>
        </div>
        <h2 className={styles.title}>¿ Por qué debería tomar el curso?</h2>
        <div className={styles.whyCourse}>
          <p align="justify">
            Es un tratamiento de resultados
            <strong> rápidos y evidentes</strong> desde la primera sesión.
            Actualmente es una de las técnicas más <strong>apetecidas</strong>{" "}
            en el mundo de la estética.
          </p>
        </div>
      </div>
      <div className={styles.listDescription}>
        <ul className={styles.ulContainer}>
          {FIRST_BENEFITS.map((listInfo) => (
            <li key={listInfo.id} className={styles.containerList}>
              <div className={styles.alignList}>
                <FontAwesomeIcon
                  className="check"
                  icon={faCircleCheck}
                />
                {listInfo.value}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
