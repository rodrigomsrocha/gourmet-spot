import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'

export function Dish() {
  return (
    <div className="flex flex-col gap-[0.625rem] bg-gray-100 p-5 rounded-lg">
      <div className="flex gap-[0.625rem]">
        <Image
          src="https://i.imgur.com/h7tHsia.png"
          width={100}
          height={120}
          alt="Macarronada"
          className="w-[6.25rem] h-[7.5rem] object-cover rounded-lg"
        />
        <div>
          <h1 className="text-xl font-bold">Macarronada</h1>
          <p className="line-clamp-4 text-sm text-gray-900">
            Um clássico prato italiano feito com massa de espaguete, ovos,
            queijo parmesão, pancetta ou bacon, e pimenta preta moída. É uma
            combinação cremosa e saborosa que agrada a todos os paladares.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[6.25rem] flex flex-col gap-[0.625rem]">
          <div className="flex justify-between p-1 bg-gray-50 rounded-lg font-bold">
            <button>
              <Minus size={14} />
            </button>
            <span>2</span>
            <button>
              <Plus size={14} />
            </button>
          </div>
          <div className="flex justify-center font-bold bg-gray-50 p-1 rounded-lg">
            <span>Mesa 1</span>
          </div>
        </div>
        <button className="self-start bg-pink-400 rounded-lg px-4 py-1 font-bold transition-colors hover:bg-pink-500">
          Adicionar a mesa
        </button>
      </div>
    </div>
  )
}
