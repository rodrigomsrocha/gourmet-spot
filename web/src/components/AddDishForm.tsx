'use client'

import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

export function AddDishForm() {
  const [quantity, setQuantity] = useState(0)

  return (
    <form className="flex justify-between">
      <div className="w-[6.25rem] flex flex-col gap-[0.625rem]">
        <div className="flex justify-between p-1 bg-gray-50 rounded-lg font-bold">
          <button
            type="button"
            onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            <Minus size={14} />
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={() => setQuantity((prev) => prev + 1)}>
            <Plus size={14} />
          </button>
        </div>
        <div className="flex justify-center font-bold bg-gray-50 p-1 rounded-lg">
          <span>Mesa 1</span>
        </div>
      </div>
      <button
        type="submit"
        disabled={quantity === 0}
        className={`self-start bg-pink-400 rounded-lg px-4 py-1 font-bold transition-colors hover:bg-pink-500 ${
          quantity === 0 &&
          'disabled:opacity-60 cursor-not-allowed hover:bg-pink-400'
        }`}
      >
        Adicionar a mesa
      </button>
    </form>
  )
}
