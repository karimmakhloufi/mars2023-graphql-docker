import { useState } from "react";

const AddWilderForm = () => {
  const [wilderName, setName] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
      }}
    >
      <h3>Add Wilder</h3>
      <label>Name </label>
      <input
        value={wilderName}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label>City </label>
      <input
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default AddWilderForm;
