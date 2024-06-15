import "./App.css";
import React, { useEffect, useState, createContext } from "react";
import Table from "./Table/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./Form/Edit";
import Deleterow from "./Form/Deleterow";
import Addcustomer from "./Form/Addcustomer";

export const PropContext = createContext();
function App() {
  const [data, setData] = useState([]);
  const [localData, setLocalData] = useState([]);
  const [filterData,setFilterData]=useState([]);
  const [entries, setEntries] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-table-backend.onrender.com/data"
      );
      const data = await response.json();
      console.log(data);
      setData(data);
      setLocalData(data);
      setFilterData(data)
    };
    fetchData();
  }, []);

  return (
    <PropContext.Provider value={{ data, entries, setEntries,localData, setData, setLocalData,filterData,setFilterData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route
            path="/edit"
            element={<Edit />}
          />
          <Route path="/delete" element={<Deleterow />}/>
          <Route path="add-customer" element={<Addcustomer/>}/>
        </Routes>
      </BrowserRouter>
    </PropContext.Provider>
  );
}

export default App;
