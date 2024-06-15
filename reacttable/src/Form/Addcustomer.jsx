import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/AddCustomer.css";
import { PropContext } from "../App";

const Addcustomer = () => {
  const { data, setData } = useContext(PropContext);
  const navigate = useNavigate();

  // Temporary state to hold form data
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
      suite: "",
      zipcode: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [mainProp, subProp] = name.split(".");

    if (subProp) {
      setFormData(prevState => ({
        ...prevState,
        [mainProp]: {
          ...prevState[mainProp],
          [subProp]: value
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
    const newCustomer = { ...formData, id: newId };

    try {
      const response = await fetch("https://react-table-backend.onrender.com/data", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newCustomer)
      });

      if (response.ok) {
        const addedCustomer = await response.json();
        setData([...data, addedCustomer]);
        navigate("/");
      } else {
        console.error("Failed to add customer");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="AddCustomer">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label-field">Name:</label>
        <input
          type="text"
          className="input-field"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label className="label-field">Username:</label>
        <input
          type="text"
          className="input-field"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label className="label-field">Email:</label>
        <input
          type="email"
          className="input-field"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label className="label-field">City:</label>
        <input
          type="text"
          className="input-field"
          name="address.city"
          value={formData.address.city}
          onChange={handleChange}
        />
        <label className="label-field">Suite:</label>
        <input
          type="text"
          className="input-field"
          name="address.suite"
          value={formData.address.suite}
          onChange={handleChange}
        />
        <label className="label-field">Zipcode:</label>
        <input
          type="number"
          className="input-field"
          name="address.zipcode"
          value={formData.address.zipcode}
          onChange={handleChange}
        />
        <button className="submitBtn" type="submit">
          Add
        </button>
        <button className="cancel-form-btn" type="button" onClick={handleHome}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Addcustomer;
