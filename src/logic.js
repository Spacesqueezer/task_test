import React, { useEffect, useState } from "react";
import styles from "./logic.module.css";
import qa from "./logic_qa";
import { renderIntoDocument } from "react-dom/test-utils";

const Logic = () => {
  const [qNumber, setQNumber] = React.useState(1);
  const [question, setQuestion] = React.useState(qa);
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.btn} ${styles.prev}`}
        onClick={() => {
          qNumber - 1 === 0 ? setQNumber(1) : setQNumber(qNumber - 1);
        }}
      />
      <fieldset className={styles.frame}>
        <legend>Вопрос №{qNumber}</legend>
        <div className={styles.header}>{question[qNumber].question}</div>
        <div className={styles.solution}>{question[qNumber].answer}</div>
      </fieldset>
      <div
        className={`${styles.btn} ${styles.next}`}
        onClick={() =>
          qNumber + 1 === Object.keys(qa).length + 1
            ? setQNumber(Object.keys(qa).length)
            : setQNumber(qNumber + 1)
        }
      />
    </div>
  );
};

export default Logic;
