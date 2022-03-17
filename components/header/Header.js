import styles from "./header.module.css";
import { Row } from "react-bootstrap";
import { Progress } from "../progressBar/progress";

export default function Header() {
  return (
    <header>
      <h2 className={styles.center}>
        Solo por hoy, <strong>80%</strong> de descuento!!
      </h2>
      <Row className={styles.containerBtn}>
        <Progress done="80" />
      </Row>
      <div className={styles.brow}>
        Esta tiene que ser la forma más sencilla
      </div>
      <h2 className={styles.title}>
        Aumenta tus <strong>clientes</strong> e <strong>ingresos</strong> en tan
        sólo <strong>15 días</strong>
        <div>con 6 técnicas nuevas de masajes. </div>
        <div>
          <strong>!Inversión mínima!</strong>
        </div>
      </h2>
    </header>
  );
}
