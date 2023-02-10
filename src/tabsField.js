import React from "react";
//import "./tabsField.module.css";
import styles from "./tabsField.module.css";
import Logic from "./logic";
import Program from "./program";

const TabsField = () => {
  const [tab, setTab] = React.useState(1);
  return (
    <div className={styles.tabsField}>
      <div className={styles.tabsFieldTabs}>
        <div
          className={`${styles.tab} ${tab === 1 ? styles.active : ""}`}
          onClick={() => setTab(1)}
        >
          <p>Задачи на логику</p>
        </div>
        <div
          className={`${styles.tab} ${tab === 0 ? styles.active : ""}`}
          onClick={() => setTab(0)}
        >
          <p>Задачи на программирование</p>
        </div>
      </div>
      <div className={styles.tabsFieldContent}>
        {tab === 1 ? <Logic /> : <Program />}
      </div>
    </div>
  );
};

export default TabsField;
