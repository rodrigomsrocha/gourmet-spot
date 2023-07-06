'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { FormEvent, ReactNode, startTransition } from 'react'
import { api } from '~/lib/api'

interface CreateClientModalProps {
  children: ReactNode
}

export function CreateClientModal({ children }: CreateClientModalProps) {
  const handleCreateClient = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    await api.post('/clients', {
      name: formData.get('name'),
      email: formData.get('email'),
    })
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-950/50 backdrop-blur-sm" />
        <Dialog.Content className="rounded-[2.5rem] bg-gray-50 w-[33.75rem] fixed left-1/2 top-1/2 p-[3.75rem] flex flex-col -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-3xl font-bold relative flex items-center before:w-5 before:h-2 before:bg-pink-400 before:absolute before:-left-[3.75rem]">
            Criar cliente
          </Dialog.Title>
          <form
            onSubmit={handleCreateClient}
            className="mt-[1.875rem] flex-1 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-[0.625rem]">
              <label htmlFor="name">Nome</label>
              <input
                className="bg-gray-100 p-2 rounded-lg"
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
              />
            </div>
            <div className="flex flex-col gap-[0.625rem]">
              <label htmlFor="email">E-mail</label>
              <input
                className="bg-gray-100 p-2 rounded-lg"
                type="email"
                id="email"
                name="email"
                placeholder="cliente@email.com"
              />
            </div>
            <button
              className="self-start bg-pink-400 rounded-lg px-4 py-2 transition-colors hover:bg-pink-500"
              type="submit"
            >
              Criar cliente
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
