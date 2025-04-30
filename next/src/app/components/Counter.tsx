'use client';

import { useState, useEffect } from 'react';

import styles from "./Counter.module.css";

import ls from "@livesession/browser";

export default function Counter() {
  const [count, setCount] = useState(0);

  function click() {
    setCount((count) => count + 1);
    ls.track("Counter", {
      value: count
    });
  }


  return (
    <div className={styles.card}>
      <button onClick={click}>
        count is {count}
      </button>
    </div>
  );
}
