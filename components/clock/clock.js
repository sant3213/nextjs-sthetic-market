import React, { Fragment } from "react";
import styles from "./clock.module.css";
import { Row } from "react-bootstrap";
const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      {/* <div className={styles.appClock}>
        <section className={styles.timerContainer}>
          <section className={styles.timer}>
            <div className={styles.clock}>
              <section>
                <p>{timerDays}</p>
                <small>Días</small>
              </section>
              <span>:</span>
              <section>
                <p>{timerHours}</p>
                <small>Horas</small>
              </section>{" "}
              <span>:</span>
              <section>
                <p>{timerMinutes}</p>
                <small>Minutos</small>
              </section>{" "}
              <span>:</span>
              <section>
                <p>{timerSeconds}</p>
                <small>Segundos</small>
              </section>
            </div>
          </section>
        </section>
      </div> */}
    
      <div className={styles.container}>
      <p className={styles.discountTitle}>Este descuento finaliza en:</p>
        <Row className={styles.appClock}>
          <div className={styles.time}>
            <p className={styles.timeNumber}>{timerDays}</p>
          </div>
          <p className={styles.timeDivider}> :</p>
          <div className={styles.time}>
            <p className={styles.timeNumber}>{timerHours}</p>
          </div>
          <p className={styles.timeDivider}>:</p>
          <div className={styles.time}>
            <p className={styles.timeNumber}>{timerMinutes}</p>
          </div>
          <p className={styles.timeDivider}>:</p>
          <div className={styles.time}>
            <p className={styles.timeNumber}>{timerSeconds}</p>
          </div>
        </Row>
        <Row className={styles.appClock}>
          <div className={styles.smallLabel}>
            <small className={styles.timeLabel}>Día(s)</small>
          </div>
          <div  className={styles.smallLabel}>
            <small className={styles.timeLabel}>Hrs</small>
          </div>
          <div  className={styles.smallLabel}>
            <small className={styles.timeLabel}>Min</small>
          </div>
          <div  className={styles.smallLabel}>
            <small className={styles.timeLabel}>Seg</small>
          </div>
        </Row>
      </div>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
export default Clock;
