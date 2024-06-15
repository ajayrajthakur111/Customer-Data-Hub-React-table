import { useContext } from "react";
import "../style/Tbody.css";
import { PropContext } from "../App";
import {  useNavigate } from "react-router-dom";

const Tbody = () => {
  const {  localData } = useContext(PropContext);
  const navigate = useNavigate();

  const handleDeleteNavigate = (id) => {
    navigate("/delete", { state: {index:id} });

   
  };
  function handleEditNavigate(id) {
    navigate("/edit", { state: {index:id} });
  }

    return (
    <tbody className="tbody">
      {localData.map((data, indexOfData) => {
        // console.log("indexOfData",indexOfData);
        return (
          <tr key={indexOfData} className="tableData">
            <td className="id ">{data.id}</td>
            <td className="name">{data.name}</td>
            <td className="username">{data.username}</td>
            <td className="email">{data.email}</td>
            <td className="city-address">{data.address.city}</td>
            <td className="suite-address">{data.address.suite}</td>
            <td className="zipcode-address">{data.address.zipcode}</td>
            <td className="action-data">
                <img
                  onClick={() => handleEditNavigate(Number(data.id))}
                  src="/Images/edit (1) 2.svg"
                  alt="edit"
                />
              <img
                src="/Images/trash-2 2.svg"
                onClick={() => handleDeleteNavigate(Number(data.id))}
                alt="delete"
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
