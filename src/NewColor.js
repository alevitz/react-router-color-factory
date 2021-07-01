
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function NewColor({addColor}) {
  const history = useHistory();
  const INITIAL_STATE = {
    name: "",
    value: ""
  }

  const [formData, setFormData] = useState({
    name: "",
    value: ""
  });

  const handleSubmit = evt => {
    console.log(formData)
    evt.preventDefault();
    addColor(formData);
    setFormData(INITIAL_STATE);
    history.push("/colors");
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Color Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="value">Color Value:</label>
        <input 
        type="color"
        name="value"
        value={formData.value}
        onChange={handleChange}
        />
        <button>Add Color</button>
      </form>
    </div>
  );
}

export default NewColor;
