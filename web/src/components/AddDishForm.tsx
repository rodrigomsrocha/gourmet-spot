'use client'

import { Minus, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { ChooseTableInput } from './ChooseTableInput'
import { api } from '~/lib/api'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface AddDishFormProps {
  dishId: string
}

export function AddDishForm({ dishId }: AddDishFormProps) {
  const router = useRouter()

  const [quantity, setQuantity] = useState(0)
  const [table, setTable] = useState<string | undefined>(undefined)

  const changeOrderTable = (tableId: string) => {
    setTable(tableId)
  }

  const makeOrder = async (e: FormEvent) => {
    e.preventDefault()

    if (!quantity || !table || !dishId) return

    await api.post('/orders', {
      tableId: table,
      quantity,
      dishId,
    })

    toast.success('Pedido feito!', {
      style: { background: '#f8f8f8', color: '#2a2725', fontWeight: 'bold' },
      iconTheme: { primary: '#ff657e', secondary: '#2a2725' },
    })

    setTable(undefined)
    setQuantity(0)

    router.push('/')
  }

  return (
    <form onSubmit={makeOrder} className="flex justify-between">
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
        <ChooseTableInput tableId={table} changeOrderTable={changeOrderTable} />
      </div>
      <button
        type="submit"
        disabled={quantity === 0 || !table}
        className="self-start bg-pink-400 rounded-lg px-4 py-1 font-bold transition-colors hover:bg-pink-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-pink-400"
      >
        Adicionar a mesa
      </button>
    </form>
  )
}
