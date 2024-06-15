import React, { useContext, useEffect, useState } from "react";
import "../style/Pagination.css";
import { PropContext } from "../App";
const Pagination = () => {
  const [count, setCount] = useState(0);
  const { data, setLocalData, entries } = useContext(PropContext);
  const handleNext = () => {
    const startIndex = entries * (count + 1);
    if (startIndex < data.length) {
      setCount(count + 1);
    }
  };
  const handlePrevious = () => {
    if(count>0){

      setCount(count - 1);
    }
  };
  useEffect(() => {
    const startIndex = entries * count;
    // console.log("startIndex", startIndex);
    const paginatedData = data.slice(startIndex, startIndex + entries);
    // console.log(paginatedData);
    setLocalData(paginatedData);
    // console.log("Count:", count, "Entries:", entries, "Data Length:", data.length, "Start Index:", startIndex);

  }, [count, data, entries, setLocalData]);

  return (
    <div className="Pagination">
      <button
        className={count > 0 ? "Previous" : "button-disabled"}
        onClick={handlePrevious}
      >
        Previous
      </button>

      <button className={ `${entries * (count + 1) >= data.length ? 'button-disabled' : 'Next'}`}
 onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
