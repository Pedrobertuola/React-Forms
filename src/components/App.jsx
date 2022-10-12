import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [newName, setNewName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function clickHandle() {
    setNewName(name);
  }

  return (
    <div className="container">
      <h1>Hello {newName}</h1>

      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={clickHandle}>Submit</button>
    </div>
  );
}

export default App;
