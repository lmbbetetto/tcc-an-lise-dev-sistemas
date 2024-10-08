"use client"

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { routes } from '@/utils/routes'

const singInForm = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
})

type SingInForm = z.infer<typeof singInForm>

export default function SingIn() {
  const router = useRouter();
  const { register, handleSubmit, setError, formState: { isSubmitting, errors } } = useForm<SingInForm>()

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
      router.push(routes.home.home);

    } catch (error) {
      console.error(error);
      setError("email", { type: "manual", message: "Credenciais inválidas." });
      setError("password", { type: "manual", message: "Credenciais inválidas." });
      toast.error('Credenciais inválidas.');
    }
  }

  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        Novo estabelecimento
      </Button>
      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar sistema
          </h1>
          <p className="text-sm text-muted-foreground">Acesse o sistema em modo gestor</p>
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

          <Button disabled={isSubmitting} className="w-full">Acessar Sistema</Button>
        </form>
      </div>
    </div>
  )
}
