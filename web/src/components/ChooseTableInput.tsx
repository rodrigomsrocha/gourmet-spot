'use client'

import * as Select from '@radix-ui/react-select'
import { useEffect, useState } from 'react'
import { api } from '~/lib/api'

interface Table {
  id: string
  number: number
  isFree: boolean
}

interface ChooseTableInputProps {
  changeOrderTable: (table: string) => void
}

export function ChooseTableInput({ changeOrderTable }: ChooseTableInputProps) {
  const [tables, setTables] = useState<Table[]>([])

  useEffect(() => {
    const getTables = async () => {
      const response = await api.get('/tables')
      setTables(response.data)
    }

    getTables()
  }, [])

  return (
    <Select.Root onValueChange={changeOrderTable}>
      <Select.Trigger className="flex justify-center font-bold bg-gray-50 p-1 rounded-lg">
        <Select.Value placeholder="Mesa" />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          sideOffset={2}
          position="popper"
          className="w-[6.25rem] overflow-hidden bg-gray-50 rounded-lg flex flex-col font-bold shadow-md"
        >
          <Select.Viewport>
            {tables
              .filter((table) => table.isFree === false)
              .map((table) => {
                return (
                  <Select.Item
                    className="p-1 outline-none cursor-pointer text-center"
                    key={table.id}
                    value={table.id}
                  >
                    <Select.ItemText>Mesa {table.number}</Select.ItemText>
                  </Select.Item>
                )
              })}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
