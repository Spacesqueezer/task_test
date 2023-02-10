import { useEffect, useState } from "react";
import React from "react";
import "./program_qa.css";

const First = () => {
  let cities = ["Москва", "Санкт-Петербург", "Воронеж"];
  const [cityStr, setCityStr] = useState("");
  useEffect(() => {
    let string = "";
    cities.forEach((city, idx) => {
      if (idx === cities.length - 1) {
        string += city + ".";
      } else {
        string += city + ", ";
      }
      setCityStr(string);
    });
  }, []);
  return (
    <div className="task_box">
      <p>{cityStr}</p>
      <img src={require("../src/img/1.png")} />
      <p>Решение около 2-х минут.</p>
    </div>
  );
};

const Second = () => {
  const ref = React.useRef(null);
  const [answer, setAnswer] = useState("");
  const solve = (txt) => {
    setAnswer(Math.round(parseInt(txt) / 5) * 5);
  };
  return (
    <div className="task_box">
      <input type="text" ref={ref} />
      <button onClick={() => solve(ref.current.value)}>Решить</button>
      <p>Ответ: {answer}</p>
      <img src={require("../src/img/2.png")} />
      <p>Решение около 1 минуты.</p>
    </div>
  );
};

const Third = () => {
  const [answer, setAnswer] = useState("");
  const ref = React.useRef(null);
  const solve = (txt) => {
    let last_num = parseInt(txt) % 100;
    if (
      !(
        last_num === 11 ||
        last_num === 12 ||
        last_num === 13 ||
        last_num === 14
      )
    ) {
      let qqq = parseInt(txt) % 10;
      switch (qqq) {
        case 1:
          setAnswer(txt + " компьютер");
          break;
        case 2:
        case 3:
        case 4:
          setAnswer(txt + " компьютерa");
          break;
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          setAnswer(txt + " компьютеров");
          break;
      }
    } else {
      setAnswer(txt + " компьютеров");
    }
  };
  return (
    <div className="task_box">
      <input type="text" ref={ref} />
      <button onClick={() => solve(ref.current.value)}>Решить</button>
      <p>Ответ: {answer}</p>
      <img src={require("../src/img/3.png")} />
      <p>Решение около 3-х минут.</p>
    </div>
  );
};

const Fourth = () => {
  const ref = React.useRef(null);
  const [answer, setAnswer] = useState("");
  const solve = (txt) => {
    let num = parseInt(txt);
    if (num < 1) {
      setAnswer("Число меньше единицы");
      return;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        setAnswer("Число " + num + " не является простым");
        return;
      }
      setAnswer("Число " + num + " является простым");
    }
  };
  return (
    <div className="task_box">
      <input type="text" ref={ref} />
      <button onClick={() => solve(ref.current.value)}>Решить</button>
      <p>Ответ: {answer}</p>
      <img src={require("../src/img/4.png")} />
      <p>Решение около 2-х минут.</p>
    </div>
  );
};

const Fifth = () => {
  let arr1 = [43, 77, 11, 34, 5, 2, 6, 4, 11, 66, 5, 78, 34, 77];
  let arr2 = [5, 17, 34, 17, 11, 23, 34, 23, 1, 5, 11];
  let ans = [];
  let duble1 = [];
  let duble2 = [];
  const [answer, setAnswer] = useState([]);
  const solve = () => {
    arr1.forEach((item, idx) => {
      if (arr1.slice(idx + 1).includes(item) && !duble1.includes(item)) {
        duble1.push(item);
      }
    });
    arr2.forEach((item, idx) => {
      if (arr2.slice(idx + 1).includes(item) && !duble2.includes(item)) {
        duble2.push(item);
      }
    });
    duble1.forEach((item) => {
      if (duble2.includes(item)) {
        ans.push(item);
      }
    });
    setAnswer(ans);
  };
  return (
    <div className="task_box">
      <p>Первый массив: [{arr1.join(", ")}]</p>
      <p>Второй массив: [{arr2.join(", ")}]</p>
      <button onClick={solve}>Решить</button>
      <p>Ответ: {answer.join(", ")}</p>
      <img src={require("../src/img/5.png")} />
      <p>Решение около 20 минут.</p>
    </div>
  );
};

const Sixth = () => {
  const ref = React.useRef(null);
  const solve = (txt) => {
    let n = parseInt(txt);
    let maxLength = (n * n).toString().length + 1;
    for (let i = 1; i <= n; i++) {
      let row = "";
      if (i === 1) {
        row += " ";
        for (let j = 1; j <= n; j++) {
          row += " ".repeat(maxLength - j.toString().length) + j;
        }
        console.log(row);
      }
      row = "";
      row += i;
      for (let j = 1; j <= n; j++) {
        let num = i * j;
        row += " ".repeat(maxLength - num.toString().length) + num;
      }
      console.log(row);
    }
  };
  return (
    <div className="task_box">
      <input type="text" ref={ref} />
      <button onClick={() => solve(ref.current.value)}>Решить</button>
      <img src={require("../src/img/6.png")} />
      <p>Решение около 20 минут.</p>
    </div>
  );
};

export { First, Second, Third, Fourth, Fifth, Sixth };
