import { Table } from '~/components/Table'
import { api } from '~/lib/api'

interface TableType {
  id: string
  isFree: boolean
  number: number
}

export default async function Home() {
  const response = await api.get('/tables')
  const tables: TableType[] = response.data

  return (
    <div className="grid grid-cols-5 gap-[3.75rem]">
      {tables.map((table) => {
        return (
          /* @ts-expect-error Server Component */
          <Table key={table.id} table={table} />
        )
      })}
    </div>
  )
}
