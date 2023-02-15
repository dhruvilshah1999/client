import React, { useState } from "react";
import '../Styles/Employee.css'
const AddNewEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (event) => {

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
      <label>
        Position:
        <input
          type="text"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Salary:
        <input
          type="number"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Create Employee</button>
    </form>
  );
};

export default AddNewEmployee;
