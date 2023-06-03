import { formatNumberToPrice } from '~/utils/formatNumberToPrice'

interface Order {
  id: string
  dish: {
    coverURL: string
    name: string
    price: number
  }
  quantity: number
}

interface SumaryProps {
  orders: Order[]
}

export function Sumary({ orders }: SumaryProps) {
  const discount = 0
  const tax = 0
  const subtotal = orders.reduce((acc, order) => {
    const currentOrderPrice = order.dish.price * order.quantity
    return acc + currentOrderPrice
  }, 0)

  return (
    <div className="rounded-[2.5rem] bg-gray-200 relative">
      <div className="p-10 flex justify-between">
        <div className="flex flex-col gap-[0.625rem]">
          <span>Subtotal</span>
          <span>Disconto</span>
          <span>Taxa</span>
        </div>
        <div className="text-right flex flex-col gap-[0.625rem]">
          <strong>{formatNumberToPrice(subtotal)}</strong>
          <strong>{formatNumberToPrice(discount)}</strong>
          <strong>{formatNumberToPrice(tax)}</strong>
        </div>
      </div>
      <div className="w-10 h-10 bg-gray-50 rounded-full absolute -left-5 bottom-32" />
      <div className="border-t-2 border-gray-50 border-dashed" />
      <div className="w-10 h-10 bg-gray-50 rounded-full absolute -right-5 bottom-32" />
      <div className="p-10 pt-5 space-y-5">
        <div className="flex justify-between">
          <strong>Total</strong>
          <strong className="text-right">
            {formatNumberToPrice(subtotal - discount + tax)}
          </strong>
        </div>
        <button className="bg-pink-400 rounded-lg w-full p-[0.625rem] font-bold transition-colors hover:bg-pink-500">
          Fechar conta
        </button>
      </div>
    </div>
  )
}
