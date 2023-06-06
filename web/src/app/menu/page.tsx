import { Dish } from '~/components/Dish'

export default function Menu() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Dish />
      <Dish />
      <Dish />
      <Dish />
    </div>
  )
}
