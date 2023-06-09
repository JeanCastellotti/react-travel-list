import { useState } from 'react'

function Form({ onAddItem }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()

    if (!description) return

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    }

    setDescription('')
    setQuantity(1)

    onAddItem(newItem)
  }

  return (
    <div className="flex items-center justify-center gap-[0.8rem] bg-[#e5771f] py-[2.8rem]">
      <h2 className="mr-[1.6rem] text-2xl">What do you need for your trip ?</h2>
      <form className="flex gap-[0.8rem]" onSubmit={handleSubmit}>
        <select
          className="cursor-pointer rounded bg-[#ffebb3] px-10 py-3 font-bold text-[#5a3e2b]"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[...Array(20)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Item..."
          className="cursor-pointer rounded border-0 bg-[#ffebb3] px-10 py-3 font-bold text-[#5a3e2b]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="rounded bg-[#76c7ad] px-10 py-3 font-bold uppercase text-[#5a3e2b]">
          Add
        </button>
      </form>
    </div>
  )
}

export default Form
