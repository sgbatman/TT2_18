import React from "react";
import { useState } from "react";

const AddExpenses = () => {
//   const [user_id, setUserId] = useState(user_id);
//   const [project_id, setProjectId] = useState(project_id);
  const [expenses, setExpenses] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [created_at, setCreatedAt] = useState(new Date().toLocaleString());
  const [created_by, setCreatedBy] = useState('');
  const [updated_at, setUpdatedAt] = useState(new Date().toLocaleString());
  const [updated_by, setUpdatedBy] = useState('');

  const onSubmit = () => {
    console.log("Submit press");
    // Add function to submit
  };

  // Add to backend
  // Need to update the link
  const addExpenses = async (expenese) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(expenses),
    });

    // Get data after update
    const data = await res.json();

    // Set data after retrieve
    // setExpensesList([...expenses, data])
  };
  // Delete Task
  const deleteExpeneses = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <p>Add Expesnes for Project</p>

      <form className="form" onSubmit={onSubmit}>
        <div className="input-group">
          <label>Expenses:</label>
          <input
            type="text"
            placeholder="Expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Description:</label>
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Amount:</label>
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="secondary" type="submit">
            Submit
        </button>
      </form>
    </>
  );
};

export default AddExpenses;
