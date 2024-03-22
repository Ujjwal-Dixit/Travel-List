// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

import { useState } from "react";

export function PackingList({ itemsList, setItemList }) {
  const [sortBy, setSortBy] = useState("input");

  function clearItemList() {
    const confirmed = window.confirm(`Are you sure you want to delete all items?`);
    if (confirmed) setItemList([]);
  }

  let sortedItems;

  if (sortBy === "input") sortedItems = itemsList;

  if (sortBy === "description") sortedItems = itemsList.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") sortedItems = itemsList.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>{sortedItems.map((item) => <Item listItems={item} setFilteredList={setItemList} key={item.id} />)}</ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>    {/* This will decide which option value is selected by default. So then we can add onChange handler to set the state   */}
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearItemList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ listItems, setFilteredList }) {

  function handleDeleteItem(id) {
    setFilteredList((listItems) => listItems.filter((item) => item.id !== id));
  }

  function handleToggleCheckbox(id) {
    setFilteredList((listItems) => listItems.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (
    <li>
      <input type="checkbox" value={listItems.packed} onChange={() => handleToggleCheckbox(listItems.id)}></input>
      <span style={listItems.packed ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{listItems.quantity} {listItems.description}</span>
      <button onClick={() => handleDeleteItem(listItems.id)}>❌</button>
    </li>
  )
}