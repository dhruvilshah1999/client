import React, { useState } from "react";
import '../Styles/Employee.css'
const AddNewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the data to the backend to create a new user
    console.log({ name, email });
    // Reset the form fields
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Create User</button>
      </form>
      );

};

export default AddNewUser;