import { Dish } from '~/components/Dish'
import { api } from '~/lib/api'

interface DishType {
  name: string
  description: string
  coverURL: string
  price: number
  id: string
}

export default async function Menu() {
  const response = await api.get('/dishes')
  const dishes: DishType[] = response.data

  return (
    <div className="grid grid-cols-3 gap-8">
      {dishes.map((dish) => {
        return <Dish key={dish.id} dish={dish} />
      })}
    </div>
  )
}
