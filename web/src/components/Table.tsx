interface TableProps {
  isFree?: boolean
  tableNumber: number
}

export function Table({ isFree = true, tableNumber }: TableProps) {
  return (
    <div className="grid grid-cols-table grid-rows-table place-items-center gap-1 cursor-pointer">
      <div
        className={`rounded-lg col-start-2 w-20 h-4 ${
          isFree ? 'bg-pink-400' : 'bg-gray-200'
        }`}
      ></div>
      <div
        className={`rounded-lg w-full col-start-1 row-start-2 h-20 ${
          isFree ? 'bg-pink-400' : 'bg-gray-200'
        }`}
      ></div>
      <div
        className={`rounded-[2.5rem] w-full col-start-2 h-40 row-start-2 flex items-center justify-center ${
          isFree ? 'bg-pink-400' : 'bg-gray-200'
        }`}
      >
        <strong className="text-2xl text-gray-950">M{tableNumber}</strong>
      </div>
      <div
        className={`rounded-lg w-full col-start-3 row-start-2 h-20 ${
          isFree ? 'bg-pink-400' : 'bg-gray-200'
        }`}
      ></div>
      <div
        className={`rounded-lg col-start-2 row-start-3 w-20 h-4 ${
          isFree ? 'bg-pink-400' : 'bg-gray-200'
        }`}
      ></div>
    </div>
  )
}
