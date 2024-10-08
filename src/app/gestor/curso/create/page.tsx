'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { ScrollArea } from "@/components/ui/scroll-area"
import { schema, Schema } from "./schema"
import { CursoPayload } from "@/service/curso"
import { createNewCurso } from "./actions"
import { toast } from "@/components/ui/use-toast"

export default function CreateCurso() {
    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            curso: "",
        },
    })

    const { reset } = form;

    const onSubmit = async (data: Schema) => {
        try {
            const payload: CursoPayload = {
                nomeCurso: data.curso
            };

            await createNewCurso(payload);

            toast({
                title: "Sucesso!",
                description: "Professor criado com sucesso!",
            });

            reset();
        } catch (error) {
            toast({
                title: "Erro",
                description: "Ocorreu um erro ao criar o professor.",
                variant: "destructive",
            });
        }
    };
    return (
        <ScrollArea className="h-[34rem] w-[853px] pr-[250px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-2 pt-0">
                    <FormField
                        control={form.control}
                        name="curso"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome do curso *</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Confirmar</Button>
                </form>
            </Form>
        </ScrollArea>
    )
}