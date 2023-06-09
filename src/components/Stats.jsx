function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="bg-[#76c7ad] py-[3.2rem] text-center text-2xl font-bold">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    )
  }

  const totalItems = items.length
  const packedItems = items.filter((item) => item.packed).length
  const percentage = Math.round((packedItems / items.length) * 100)

  return (
    <footer className="bg-[#76c7ad] py-[3.2rem] text-center text-2xl font-bold">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `🎒 You have ${totalItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  )
}

export default Stats
