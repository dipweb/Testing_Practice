import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  return (
    <div>
      <h1>Event testing</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {data}
      <button onClick={(e) => setData("updated data")}>Update Date</button>
    </div>
  );
}

export default App;
