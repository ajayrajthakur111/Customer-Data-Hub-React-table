import React from "react";
import "../style/Deleterow.css";
import { AlertTriangle } from "react-feather";
import { useNavigate, useLocation } from "react-router-dom";
import { PropContext } from "../App";
import { useContext } from "react";

const Deleterow = () => {
  const { data, setData } = useContext(PropContext);
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.index;
  // console.log("stateInex", id);

  const handleDelete = async () => {
    try {
      // console.log(id);
      const response = await fetch(`https://react-table-backend.onrender.com/data/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const updatedDeleteData = data.filter((_) => {
          // console.log("idx", _.id);
          // console.log("id", id);
         return  _.id !== id;
        });

        setData(updatedDeleteData);
        navigate("/");
      } else {
        console.error("Failed to update data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className="deleteCard">
      <div className="delete-icon-title">
        <AlertTriangle />
        <h2>Delete User?</h2>
      </div>
      <div className="delete-confirmation">
        <p>Are you sure you want to remove this user?</p>
        <p>This action is irreversible.</p>
      </div>
      <div className="delete-yes-no">
        <button className="Delete delete-cancel" onClick={handleDelete}>
          {" "}
          Delete
        </button>
        <button className="Cancel delete-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Deleterow;
