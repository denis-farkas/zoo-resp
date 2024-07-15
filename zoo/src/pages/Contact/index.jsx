import "./contact.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import formatDate from "../../utils/formatDate.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
    date: formatDate(Date.now()),
    phone: "",
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const API_URL = "http://localhost:3001";

    let { name, email, content, date, phone } = formData;
    let data = JSON.stringify({ name, email, content, date, phone });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/api/createMessage`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log("Response succeeded!");

          toast.success("Message envoyé avec succès");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((error) => {
        const errorMessage = error.response
          ? error.response.data.message || "An error occurred"
          : "An error occurred";
        toast.error(errorMessage);
      });
  };

  return (
    <div className="main-table">
      <div className="center">
        <h2>Formulaire de message</h2>
      </div>
      <form className="formGroup" onSubmit={handleSubmit}>
        <div className="col-sm-6 mx-auto">
          <label className="form-label mt-4" htmlFor="name">
            Nom:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required="required"
          />
        </div>
        <div className="col-sm-6 mx-auto">
          <label className="form-label mt-4" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-6 mx-auto">
          <label className="form-label mt-4" htmlFor="content">
            Message:
          </label>
          <textarea
            id="content"
            name="content"
            className="form-control"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm-6 mx-auto">
          <label className="form-label mt-4" htmlFor="phone">
            Téléphone (optionel):
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="center">
          <button className="btn btn-primary my-4" type="submit">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
