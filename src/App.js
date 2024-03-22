import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { Stats } from "./components/Stats";
import { PackingList } from "./components/ItemList";
import { useState } from "react";

export default function App() {

  // Lifting up the state:
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form setListItems={setItems} />
      <PackingList itemsList={items} setItemList={setItems} />
      <Stats itemsList={items} />
    </div>
  );
}