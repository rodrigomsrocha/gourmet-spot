interface TableProps {
  isEmpty?: boolean
}

export function Table({ isEmpty = true }: TableProps) {
  return (
    <div className="grid grid-cols-table grid-rows-table place-items-center gap-1 cursor-pointer">
      <div
        className={`rounded-lg col-start-2 w-20 h-4 ${
          isEmpty ? 'bg-pink-400' : 'bg-gray-200'
        }`}
      ></div>
      <div
        className={`rounded-lg w-full col-start-1 row-start-2 h-20 ${
          isEmpty ? 'bg-pink-400' : 'bg-gray-200'
        }`}
      ></div>
      <div
        className={`rounded-[2.5rem] w-full col-start-2 h-40 row-start-2 flex items-center justify-center ${
          isEmpty ? 'bg-pink-400' : 'bg-gray-200'
        }`}
      >
        <strong className="text-2xl text-gray-950">M1</strong>
      </div>
      <div
        className={`rounded-lg w-full col-start-3 row-start-2 h-20 ${
          isEmpty ? 'bg-pink-400' : 'bg-gray-200'
        }`}
      ></div>
      <div
        className={`rounded-lg col-start-2 row-start-3 w-20 h-4 ${
          isEmpty ? 'bg-pink-400' : 'bg-gray-200'
        }`}
      ></div>
    </div>
  )
}
