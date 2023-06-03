import Image from 'next/image'
import { formatNumberToPrice } from '~/utils/formatNumberToPrice'

interface OrderProps {
  order: {
    dish: {
      coverURL: string
      name: string
      price: number
    }
    quantity: number
  }
}

export function Order({ order }: OrderProps) {
  return (
    <div className="flex gap-[0.625rem] items-center">
      <Image
        src={order.dish.coverURL}
        className="w-20 h-20 rounded-lg object-cover"
        width={80}
        height={80}
        alt={order.dish.name}
      />
      <div className="flex-1 flex justify-between">
        <div className="flex flex-col gap-2">
          <strong className="font-bold w-32 whitespace-nowrap text-ellipsis overflow-hidden">
            {order.dish.name}
          </strong>
          <span className="text-sm leading-none">
            {formatNumberToPrice(order.dish.price)}
          </span>
          <span className="text-sm leading-none">Qnt. {order.quantity}x</span>
        </div>
        <strong className="font-bold">
          {formatNumberToPrice(order.dish.price * order.quantity)}
        </strong>
      </div>
    </div>
  )
}
