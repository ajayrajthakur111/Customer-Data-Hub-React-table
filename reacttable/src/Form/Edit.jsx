import React, { useContext,useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { PropContext } from "../App";
import "../style/Edit.css";
const Edit = () => {
  const { data, setData } = useContext(PropContext);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.index;

  useEffect(() => {
    if (id === undefined || data[id] === undefined) {
      navigate('/');
    } else {
      setFormData(data.find(item => item.id === id) || {});
    }
  }, [id, data, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [mainProp, subProp] = name.split(".");
    setFormData((prevFormData) => {
      const updatedData = { ...prevFormData };
      if (subProp) {
        updatedData[mainProp] = { ...updatedData[mainProp], [subProp]: value };
      } else {
        updatedData[name] = value;
      }
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://react-table-backend.onrender.com/data/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const updatedData = [...data];
        updatedData[id] = formData;
        setData(updatedData);
        navigate('/');
      } else {
        console.error('Error updating data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="Editbutton">
      <form onSubmit={handleSubmit}>
        <label className="label-field">Name:</label>
        <input
          type="text"
          className="input-field"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
        />
        <label className="label-field">Username:</label>
        <input
          type="text"
          className="input-field"
          name="username"
          value={formData.username || ""}
          onChange={handleChange}
        />
        <label className="label-field">Email:</label>
        <input
          type="text"
          className="input-field"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
        />
        <label className="label-field">City:</label>
        <input
          type="text"
          className="input-field"
          name="address.city"
          value={formData.address?.city || ""}
          onChange={handleChange}
        />
        <label className="label-field">Suite:</label>
        <input
          type="text"
          className="input-field"
          name="address.suite"
          value={formData.address?.suite || ""}
          onChange={handleChange}
        />
        <label className="label-field">Zipcode:</label>
        <input
          type="text"
          className="input-field"
          name="address.zipcode"
          value={formData.address?.zipcode || ""}
          onChange={handleChange}
        />
        <button className="submitBtn" type="submit">
          Submit
        </button>
        <button className="cancel-form-btn" onClick={handleHome}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Edit;
