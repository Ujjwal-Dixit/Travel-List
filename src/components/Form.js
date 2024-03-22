import { useState } from "react";

export function Form({ setListItems }) {
  const [quantity, setQuantity] = useState(1)
  const [description, setDescription] = useState("");


  const options = [];
  for (let i = 1; i <= 20; i++) {
    options.push(i);
  }

  // Here first we have to create item list then we will use that list to pass our items to packing list component
  function handleAddItems(newItem) {
    setListItems((items) => [...items, newItem])
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const inputItem = { quantity, description, packed: false, id: Date.now() };
    console.log(inputItem)
    handleAddItems(inputItem);

    // After one submission is done, we want our app to go back to initial state
    setQuantity(1);
    setDescription("");
  }

  function handleInputChange(e) {
    setDescription(e.target.value);
    console.log(e.target.value)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {options.map((value) => <option value={value} key={value}>{value}</option>)}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={handleInputChange} />
      <button>Add</button>
    </form>
  );
}



/*
? <select> is an HTML element used to create a dropdown or select input field.

? onChange={(e) => setQuantity(Number(e.target.value))}: This prop specifies a function that will be called when the user changes the selected option. When a change event occurs (such as selecting a different option), the provided function will be executed. In this case, it takes the event e as an argument and sets the quantity state variable to the numeric value of the selected option.

! Simple dropdown in html

<select> <option>1</option> </select>          // With single option/value

<select>
  <option>1</option>
  <option>2</option>                           // With 1,2,3,4.. option/value in a dropdown 
  <option>3</option>
  <option>4</option>
</select>




* In JavaScript, you can add and delete items from an array without mutating the original array by creating a new array with the desired changes using spread operator.

const originalArray = [1, 2, 3];
const newItem = 4;

const newArray = [...originalArray, newItem];
console.log(newArray); // [1, 2, 3, 4]

*/