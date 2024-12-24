import { useState } from "react";
import { FruitsContextProvider, useFruitsContext } from "../contexts/fruits";

export function Fruits() {
  return (
    <>
      <FruitsContextProvider>
        <FruitList />
        <NewFruitList />
      </FruitsContextProvider>
    </>
  );
}

function FruitList() {
  const { fruits, addFruit } = useFruitsContext();
  const [selectedFruit, setSelectedFruit] = useState("apple");

  const fruitOptions = ["apple", "banana", "orange", "grape", "mango"];

  return (
    <div>
      <div>Current fruits on the list: {fruits.join(", ")}</div>
      <div>
        <select
          value={selectedFruit}
          onChange={(e) => setSelectedFruit(e.target.value)}
        >
          {fruitOptions.map((fruit) => (
            <option key={fruit} value={fruit}>
              {fruit.charAt(0).toUpperCase() + fruit.slice(1)}
            </option>
          ))}
        </select>
        <button onClick={() => addFruit(selectedFruit)}>Add</button>
      </div>
    </div>
  );
}

function NewFruitList() {
  const { fruits } = useFruitsContext();

  return <div>New Fruit List: {fruits.join(", ")}</div>;
}
