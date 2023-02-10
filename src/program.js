import React from "react";
import styles from "./program.module.css";
import { First, Second, Third, Fourth, Fifth, Sixth } from "./program_qa";
import Selector from "./selector";

const Program = () => {
  const [current, setCurrent] = React.useState(0);
  let programs = [
    <First />,
    <Second />,
    <Third />,
    <Fourth />,
    <Fifth />,
    <Sixth />,
  ];
  const changeProgram = (idx) => {
    setCurrent(idx);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>{programs[current]}</div>
      <Selector changeProgram={changeProgram}/>
    </div>
  );
};

export default Program;
