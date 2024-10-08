"use client"

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { routesProfessor } from '@/utils/routes'

const singInForm = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
})

type SingInForm = z.infer<typeof singInForm>

export default function SingIn() {
  const { register, handleSubmit, setError, formState: { isSubmitting, errors } } = useForm<SingInForm>()
  const router = useRouter()

  async function handleSingIn(data: SingInForm) {
    try {
      await new Promise((resolve, reject) => {
        const isValid = data.email === "leonardo@email.com" && data.password === "senha123";
        setTimeout(() => {
          if (isValid) {
            resolve(null);
          } else {
            reject(new Error("Credenciais inválidas"));
          }
        }, 2000);
      });

      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSingIn(data),
        }
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push(routesProfessor.home.home);

    } catch (error) {
      setError("email", { type: "manual", message: "Credenciais inválidas." });
      setError("password", { type: "manual", message: "Credenciais inválidas." });
      toast.error('Credenciais inválidas.');
    }
  }

  return (
    <div className="p-8">
      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar sistema
          </h1>
          <p className="text-sm text-muted-foreground">Acesse o sistema em modo professor</p>
        </div>

        <form onSubmit={handleSubmit(handleSingIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" {...register('password')} />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <Button disabled={isSubmitting} className="w-full" type="submit">
            Acessar Sistema
          </Button>
        </form>
      </div>
    </div>
  )
}
