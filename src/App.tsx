import { useState } from "react";

const App = () => {
  let [persons, setPerson] = useState([
    { id: 1, name: "Elias", province: "Kabul", status: "Married" },
    { id: 2, name: "Mohammad Haroon", province: "Takhar", status: "Single" },
    { id: 3, name: "Ismail Noor", province: "Nangarhar", status: "widow" }
  ]);

  const handleClick = () => {
    setPerson(
      persons.map(person =>
        person.id === 1 ? { ...person, status: "Single" } : person
      )
    );
  };

  return (
    <div>
      {persons[0].status}
      <button onClick={handleClick}>Change</button>
    </div>
  );
};
export default App;
