import { api } from '~/lib/api'
import { Drawer } from './Drawer'

interface TableProps {
  table: {
    isFree: boolean
    number: number
    id: string
  }
}

export async function Table({ table }: TableProps) {
  if (table.isFree) {
    return (
      <div className="grid grid-cols-table grid-rows-table place-items-center gap-1">
        <div className="rounded-lg col-start-2 w-20 h-4 bg-gray-200"></div>
        <div className="rounded-lg w-full col-start-1 row-start-2 h-20 bg-gray-200"></div>
        <div className="rounded-[2.5rem] w-full col-start-2 h-40 row-start-2 flex items-center justify-center bg-gray-200">
          <strong className="text-2xl text-gray-950">M{table.number}</strong>
        </div>
        <div className="rounded-lg w-full col-start-3 row-start-2 h-20 bg-gray-200"></div>
        <div className="rounded-lg col-start-2 row-start-3 w-20 h-4 bg-gray-200"></div>
      </div>
    )
  }

  const [bookingRes, ordersRes] = await Promise.all([
    api.get(`/bookings?tableId=${table.id}`),
    api.get(`/orders?tableId=${table.id}`),
  ])

  const booking = bookingRes.data
  const orders = ordersRes.data

  return (
    <Drawer booking={booking} orders={orders}>
      <div className="grid grid-cols-table grid-rows-table place-items-center gap-1 cursor-pointer">
        <div className="rounded-lg col-start-2 w-20 h-4 bg-pink-400"></div>
        <div className="rounded-lg w-full col-start-1 row-start-2 h-20 bg-pink-400"></div>
        <div className="rounded-[2.5rem] w-full col-start-2 h-40 row-start-2 flex items-center justify-center bg-pink-400 relative">
          <strong className="text-2xl text-gray-950">M{table.number}</strong>
          <span className="w-5 h-5 rounded-full bg-pink-400 top-0 right-0 absolute font-bold flex items-center justify-center text-sm border-2 border-gray-950">
            {orders.length}
          </span>
        </div>
        <div className="rounded-lg w-full col-start-3 row-start-2 h-20 bg-pink-400"></div>
        <div className="rounded-lg col-start-2 row-start-3 w-20 h-4 bg-pink-400"></div>
      </div>
    </Drawer>
  )
}
