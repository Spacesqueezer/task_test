import React, { useEffect } from "react";
import styles from "./selector.module.css";

const Selector = (props) => {
  const [selected, setSelected] = React.useState(0);
  useEffect(() => {
    props.changeProgram(selected);
  });
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.btn}
        onClick={() => {
          if (selected - 1 >= 0) {
            setSelected(selected - 1);
          }
        }}
      >
        {"<<<"}
      </div>
      <div className={`${styles.ball} ${selected === 0 ? styles.active : ""}`}>
        1
      </div>
      <div className={`${styles.ball} ${selected === 1 ? styles.active : ""}`}>
        2
      </div>
      <div className={`${styles.ball} ${selected === 2 ? styles.active : ""}`}>
        3
      </div>
      <div className={`${styles.ball} ${selected === 3 ? styles.active : ""}`}>
        4
      </div>
      <div className={`${styles.ball} ${selected === 4 ? styles.active : ""}`}>
        5
      </div>
      <div className={`${styles.ball} ${selected === 5 ? styles.active : ""}`}>
        6
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          if (selected + 1 <= 5) {
            setSelected(selected + 1);
          }
        }}
      >
        {">>>"}
      </div>
    </div>
  );
};

export default Selector;
