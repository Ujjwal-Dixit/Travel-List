export function Stats({ itemsList }) {

  if (!itemsList.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    )

  const numberOfItems = itemsList.length;
  const packedItems = itemsList.filter((item) => item.packed).length;
  const packedItemPercent = Math.round((packedItems / numberOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedItemPercent === 100 ? `You got everything! Ready to go ✈️` :
          `🧳 You have ${numberOfItems} items on your list, and you already packed ${packedItems} (${packedItemPercent}%)`
        }
      </em>
    </footer>
  );
}