function Item({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li className="flex items-center gap-[1.2rem]">
      <input
        type="checkbox"
        className="h-6 w-6 accent-[#e5771f]"
        value={packed}
        onChange={() => onToggleItem(id)}
      />
      <span className={packed ? 'line-through' : undefined}>
        {quantity} {description}
      </span>
      <button className="text-base" onClick={() => onDeleteItem(id)}>
        ❌
      </button>
    </li>
  )
}

export default Item
