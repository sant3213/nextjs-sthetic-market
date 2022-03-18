import React, { Fragment } from "react";
import styles from "./clock.module.css";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <div className={styles.appClock}>
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
