import { useState } from 'react'
import Item from './Item'

function PackingList({ items, onDeleteItem, onToggleItem, onDeleteItems }) {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems

  switch (sortBy) {
    case 'input':
      sortedItems = items
      break
    case 'description':
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description))
      break
    case 'packed':
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed))
      break
  }

  return (
    <section className="flex flex-1 flex-col items-center justify-between gap-[3.2rem] bg-[#5a3e2b] py-[4rem] text-2xl text-[#ffebb3]">
      {items.length ? (
        <ul className="grid w-[80%] grid-cols-4 content-start justify-center gap-[1.2rem]">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              {...item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      ) : (
        <p>No items</p>
      )}

      {!!items.length && (
        <div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="mx-[0.8rem] rounded border-none bg-[#ffebb3] px-[2.4rem] py-[0.8rem] text-xl font-bold uppercase text-[#5a3e2b]"
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button
            onClick={onDeleteItems}
            className="rounded border-none bg-[#ffebb3] px-[2.4rem] py-[0.8rem] text-xl font-bold uppercase text-[#5a3e2b]"
          >
            Clear list
          </button>
        </div>
      )}
    </section>
  )
}

export default PackingList
