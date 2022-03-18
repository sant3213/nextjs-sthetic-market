import styles from "./header.module.css";
import { Row } from "react-bootstrap";
import { Progress } from "../progressBar/progress";

export default function Header() {
  return (
    <header>
      <Row className={styles.containerBtn}>
        <Progress done="80" />
      </Row>
      <div className={styles.brow}>
        Esta tiene que ser la forma más sencilla
      </div>
      
      <h2 className={styles.title}>
        Aumenta tus clientes e ingresos en tan sólo <span className={styles.importantSpan}>15 días</span>{" "}
        con 6 técnicas nuevas de masajes. 
      </h2>
      <h2 className={styles.title}>
        <strong>¡Inversión mínima!</strong>
      </h2>
    </header>
  );
}
