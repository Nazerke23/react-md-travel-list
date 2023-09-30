import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [opt, setOpt] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, opt, packed: false, id: Date.now() };

    handleAddItems(newItem);

    setDescription("");
    setOpt(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={opt}
        onChange={(e) => {
          setOpt(+e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
