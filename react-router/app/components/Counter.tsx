import { useState, useEffect } from "react";

import ls from "@livesession/browser";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);

    ls.track("Counter", {
      value: count,
    });
  };


  return (
    <button
        type="button"
        onClick={handleIncrement}
        className="w-full p-3 text-lg font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
        count is {count}
    </button>
  );
} 