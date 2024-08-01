"use client"

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import LoginLayout from './layout'

const singInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SingInForm = z.infer<typeof singInForm>


export default function SingIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SingInForm>()

  async function handleSingIn(data: SingInForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSingIn(data),
        }
      })
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          Novo estabelecimento
        </Button>
        <div className="w-[350px] flex flex-col justfy-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar sistema
            </h1>
            <p className="text-sm text-muted-foreground ">Acesse o sistema em modo gestor</p>
          </div>

          <form onSubmit={handleSubmit(handleSingIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Senha</Label>
              <Input id="password" type="password" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} className="w-full">Acessar Sistema</Button>
          </form>
        </div>
      </div >
  )
}