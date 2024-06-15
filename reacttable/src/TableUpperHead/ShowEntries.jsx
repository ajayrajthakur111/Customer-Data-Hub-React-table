import React, { useContext, useEffect } from "react";
import "../style/ShowEntries.css";
import { PropContext } from "../App";

const ShowEntries = () => {
  const { data, setLocalData, setFilterData ,entries, setEntries} = useContext(PropContext);
  const handleSelectEntries = (e) => {
    setEntries(Number(e.target.value));
  };
  useEffect(() => {
    const filteredEntryData = data.slice(0, entries);
    console.log("filteredEntryData", filteredEntryData);
    setLocalData(filteredEntryData);
    setFilterData(filteredEntryData);
  }, [entries, data, setLocalData, setFilterData]);
  return (
    <div className="ShowEntries">
      <div>Show</div>
      <select
        className="select-entries"
        onChange={handleSelectEntries}
        value={entries}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
      entries
    </div>
  );
};

export default ShowEntries;
