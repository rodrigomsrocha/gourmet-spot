import Image from 'next/image'
import { formatNumberToPrice } from '~/utils/formatNumberToPrice'
import { AddDishForm } from './AddDishForm'

interface DishType {
  id: string
  name: string
  description: string
  coverURL: string
  price: number
}

interface DishProps {
  dish: DishType
}

export function Dish({ dish }: DishProps) {
  return (
    <div className="flex flex-col gap-[0.625rem] bg-gray-100 p-5 rounded-lg">
      <div className="flex gap-[0.625rem]">
        <div className="relative">
          <Image
            src={dish.coverURL}
            width={100}
            height={120}
            alt="Macarronada"
            className="min-w-[6.25rem] h-[7.5rem] object-cover rounded-lg"
          />
          <strong className="absolute bottom-0 bg-gray-950/50 w-full p-1 rounded-b-lg flex justify-center text-gray-50">
            {formatNumberToPrice(dish.price)}
          </strong>
        </div>
        <div>
          <h1 className="text-xl font-bold">{dish.name}</h1>
          <p className="line-clamp-4 text-sm text-gray-900">
            {dish.description}
          </p>
        </div>
      </div>
      <AddDishForm dishId={dish.id} />
    </div>
  )
}
