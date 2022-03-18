import React from "react";
import styles from "./progress.module.css";
export const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className={styles.progress}>
      <div className={styles.progressDone} style={style}>
        <p className={styles.join}>
          ÚNETE HOY CON EL <strong>{done}% </strong> DE DESCUENTO!!
        </p>
      </div>
    </div>
  );
};
