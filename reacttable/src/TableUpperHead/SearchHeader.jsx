import React, { useContext } from "react";
import "../style/SearchHeader.css";
import { PropContext } from "../App";

const SearchHeader = () => {

  const { setLocalData,filterData} = useContext(PropContext);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const searchedData = filterData.filter((datas) => {
      return Object.values(datas).some((val) =>
        String(val).toLowerCase().includes(value)
      );
    });
    setLocalData(searchedData)
  };
  return (
    <div className="SearchHeader">
      <img className="searchSVG" src="/Images/Vector.svg" alt="img" />
      <input
        className="searchMain"
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default SearchHeader;
